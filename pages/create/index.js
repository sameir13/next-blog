import Header from "../../components/Header";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useMemo } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const create = () => {


  

  
  const router = useRouter();
  const editor = useRef(null);
  
  const [loader, setloader] = useState(false);
  const [content, setContent] = useState("");
  const [tempImage, setTempImage] = useState("");

  const [formData, setformData] = useState({
    title: "",
    subTitle: "",
    desc: "",
    metaDesc: "",
    category: "",
    avatarAlt: "",
    authorID: "",
  });

  //onChange functions for the from data input
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData({ ...formData, [name]: value });
  };



  const uploadImageToCloudinary = async () => {
    try {
      const data = new FormData();
      data.append("file", tempImage);
      data.append("upload_preset", "Blog-images");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/sameer-13/image/upload",
        {
          body: data,
          method: "POST",
        }
      );

      const jsonRes = await res.json();
      return jsonRes.secure_url;
    } catch (error) {
      alert("something went wrong with the image");
    }
  };

  const submitBlog = async (e) => {
    try {
      e.preventDefault();
      setloader(true);
      const imageURL = await uploadImageToCloudinary();
      const res = await axios.post("/api/blog/post", {
        ...formData,
        avatar: imageURL,
      });
      if (toast.success("Blog Uploaded Successfully!")) {
        router.push("/");
      }

      setformData({
        title: "",
        subTitle: "",
        desc: "",
        metaDesc: "",
        category: "",
        avatarAlt: "",
        authorID: "",
      });
      setTempImage("");
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    } finally {
      setloader(false);
    }
  };

  // Reseting the from
  const handleDelete = () => {
    setformData({
      title: "",
      subTitle: "",
      desc: "",
      metaDesc: "",
      category: "",
      avatarAlt: "",
      authorID: "",
    });
    setTempImage("");
  };

  return (
    <div>
      <Header></Header>
      <Toaster />
      <div className="add-flex">
        <form onSubmit={submitBlog} className="create">
          <div className="main">
            <h1>
              <span style={{ color: "gray", fontSize: "30px" }}>
                What's On Your
              </span>{" "}
              <span style={{ color: "orange", fontSize: "30px" }}>Mind?</span>
            </h1>
          </div>
          <div className="inputs">
            <div className="tag" id="tag-1">
              <label style={{ color: "blue", fontSize: "18px" }}>Title</label>
              <br></br>
              <input
                type="text"
                value={formData.title}
                className="add-ttls"
                id="title"
                name="title"
                onChange={handleInput}
                placeholder="Please enter title (50-100 characters)"
              />
            </div>

            <div className="tag" id="tag-2">
              <label style={{ color: "blue", fontSize: "18px" }}>
                Sub-title
              </label>
              <br></br>
              <input
                type="text"
                className="add-ttls"
                value={formData.subTitle}
                onChange={handleInput}
                id="subTitle"
                name="subTitle"
                placeholder="Please Enter the Sub-Title"
              />
            </div>

            <div className="tag" id="tag-2">
              <label style={{ color: "blue", fontSize: "18px" }}>
                Meta-Desccription
              </label>
              <br></br>
              <input
                type="text"
                onChange={handleInput}
                value={formData.metaDesc}
                className="add-ttls"
                id="metaDesc"
                name="metaDesc"
                placeholder="Please Enter the Meta-Desccription"
              />
            </div>

            <div className="tag" id="tag-2">
              <label style={{ color: "blue", fontSize: "18px" }}>
                Category
              </label>
              <br></br>
              <input
                type="text"
                className="add-ttls"
                value={formData.category}
                onChange={handleInput}
                id="category"
                name="category"
                placeholder="Enter the Category"
              />
            </div>

            <div className="tag" style={{ marginBottom: "20px" }} id="tag-2">
              <label style={{ color: "blue", fontSize: "18px" }}>
                Write here
              </label>
              <br></br>
              <JoditEditor
                className="jodit"
                ref={editor}
                value={formData.desc}
                tabIndex={1}
                onBlur={(v) => setformData({ ...formData, desc: v })}
                onChange={(v) => setformData({ ...formData, desc: v })}
              />
            </div>

            <div className="add-image">
              {tempImage ? (
                <div className="trace" style={{ display: "none" }}>
                  <label htmlFor="input">Upload Image</label>
                  <input
                    type="file"
                    onChange={(e) => setTempImage(e.target.files[0])}
                  />
                </div>
              ) : (
                <div className="trace">
                  <div className="enter-image">
                    <img
                      style={{ width: "100px", marginTop: "40px" }}
                      src="/images/cloud.png"
                      className="upload-image-class"
                    />
                    <label
                      htmlFor="input"
                      className="uplaod-lable"
                    >
                      Upload Image
                    </label>
                    <input
                      id="input"
                      type="file"
                      onChange={(e) => setTempImage(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {tempImage && (
            <div className="trace-2">
              <div>
                <div className="font-cross">
                  <i
                    class="fa-solid fa-xmark"
                    onClick={(e) => {
                      setTempImage("");
                    }}
                  ></i>
                </div>
                <div className="display-image">
                  <img src={URL.createObjectURL(tempImage)} />
                </div>
              </div>
            </div>
          )}

          {tempImage ? (
            <div className="tag" id="tag-2">
              <label
                style={{ color: "blue", marginTop: "10px", fontSize: "18px" }}
              >
                Alternate text
              </label>
              <br></br>
              <input
                type="text"
                className="add-ttls"
                onChange={handleInput}
                value={formData.avatarAlt}
                id="avatarAlt"
                name="avatarAlt"
                placeholder="Alt text?"
              />
            </div>
          ) : null}

          <div className="tag" id="tag-2">
            <label
              style={{ color: "blue", marginTop: "10px", fontSize: "18px" }}
            >
              Author ID
            </label>
            <br></br>
            <input
              type="text"
              className="add-ttls"
              value={formData.authorID}
              onChange={handleInput}
              id="authorID"
              name="authorID"
              placeholder="Please Enter the Author Identity"
            />
          </div>

          <div>
            <button
              onClick={handleDelete}
              style={{
                backgroundColor: "rgb(240,240,240)",
                padding: "5px 20px",
                marginRight: "10px",
                borderRadius: "10px",
                fontSize: "18px",
                border: "1px solid rgb(97,105,116)",
              }}
            >
              Reset
            </button>
            <button
              type="submit"
              className="button-class-submit"
              disabled={loader}
            >
              {loader ? "Loading.." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default create;
