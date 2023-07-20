import Header from "../../components/Header";
import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { MdCloudUpload } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.min.css";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "next/dist/server/api-utils";
import blog from "@/models/blog";
const index = () => {
  const router = useRouter();

  const slug = router.query.slug;

  const editor = useRef(null);
  const [file, setFile] = useState("");
  const [isFetching, setIsfetching] = useState(false);
  const handleDeleteImage = () => {
    setFile(null);
  };

  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    metaDesc: "",
    category: "",
    desc: "",
    avatarAlt: "",
    authorID: ""
  });

  const UploadImageToCloudinary = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "blog-images");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/hadi131/image/upload ",
        {
          body: data,
          method: "POST"
        }
      );

      const jsonImg = await res.json();
      return jsonImg.secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/blog/${slug}`);
      var res = await data.json();
      console.log(res);
      
      setForm({
        title: res?.title,
        subTitle: res?.subTitle,
        metaDesc: res?.metaDesc,
        category: res?.category,
        desc: res?.desc,
        avatarAlt: res?.avatarAlt,
        authorID: res?.authorID,
        avatar: res?.avatar
      });
    };

    fetchData();
  }, []);

  const HandleUpdate = async (e) => {
    setIsfetching(true);
    try {
      e.preventDefault();
      const ImageURL = await UploadImageToCloudinary();
      const res = await axios.put(`/api/blog/${slug}`, {
          ...form,
        avatar: ImageURL
      });
      setIsfetching(false);

      if (toast.success("Blog Updated")) {
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.log(error.response.data.message);
        setIsfetching(false);
      }
    }
  };

  return (
    <>
      <Toaster />
      <Header></Header>
      <div className="write-blog-main-div">
        <form action="" onSubmit={HandleUpdate}>
          <h1>What's On Your Mind?</h1>

          <div className="feilds">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              id="title"
              onChange={handleInput}
              placeholder="Enter Title"
            />
          </div>

          <div className="feilds">
            <label htmlFor="subtitle">Sub Title</label>
            <input
              type="text"
              name="subTitle"
              value={form.subTitle}
              id="subtitle"
              onChange={handleInput}
              placeholder="Enter Sub Title"
            />
          </div>

          <div className="feilds">
            <label htmlFor="metadesc">Meta Description</label>
            <input
              type="text"
              onChange={handleInput}
              name="metaDesc"
              value={form.metaDesc}
              id="metadesc"
              placeholder="Enter Meta Description"
            />
          </div>

          <div className="feilds">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              onChange={handleInput}
              name="category"
              value={form.category}
              id="category"
              placeholder="Enter Category"
            />
          </div>

          <div className="desc">
            <JoditEditor
              ref={editor}
              onBlur={(v) => setForm({ ...form, desc: v })}
              onChange={(v) => setForm({ ...form, desc: v })}
              value={form.desc}
              tabIndex={1}
            ></JoditEditor>
          </div>

          <div className="avatar-upload-main">
            {(file || form.avatar) && (
              <div className="crossimage">
                <ImCross
                  onClick={(e)=>setForm({avatar:null})}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}

            <div className="avatar-upload">
              {file || form.avatar ? (
                <>
                  <img
                    className="avatarpreview"
                    src={form.avatar ? form.avatar : URL.createObjectURL(file)}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <div className="uploadIcon">
                    <MdCloudUpload />
                  </div>
                  <label htmlFor="avatarinput" style={{ cursor: "pointer" }}>
                    Upload Image
                  </label>
                  <input
                    id="avatarinput"
                    style={{ display: "none" }}
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </>
              )}
            </div>
          </div>
          {file && (
            <div className="feilds">
              <label htmlFor="avatarAlt">Avatar Alt</label>
              <input
                type="text"
                id="avatarAlt"
                onChange={handleInput}
                name="avatarAlt"
                value={form.avatarAlt}
                placeholder="avatarAlt"
              />
            </div>
          )}

          <div className="feilds">
            <label htmlFor="authoid">Author ID</label>
            <input
              type="text"
              name="authorID"
              value={form.authorID}
              onChange={handleInput}
              id="authoid"
              placeholder="Author Id"
            />
          </div>
          <div className="btns">
            <button type="submit" className="btn btn2">
              {isFetching ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default index;
