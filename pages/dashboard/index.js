import React from "react";
import Header from "../../components/Header";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Toast, Toaster, toast } from "react-hot-toast";

const dashboard = ({ data }) => {

   console.log(data?.Blog[1])
  


  const router = useRouter();
  const HandleDelete = async (slug) => {
    try {
      if (window.confirm("Do you want to delete blog") === true) {
        const res = await fetch(`https://next-blog-liard-theta-11.vercel.app//api/blog/${slug}`, {
          method: "DELETE",
        });

        if (toast.success("Blog has been deleted")) {
          router.push("/dashboard");
        } else {
          toast.error("Something went wrong");
        }
      } else {
        null;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Toaster />
      <Header></Header>

 
    <div className="dashboard-flex">
    <div className="dashboard-all-blogs-main">
      {data?.Blog?.map((v) => {
        return (
          <div key={v._id} className="dashboard-blog-main">
            <div className="dashboard-blog-data-parent">
              <div className="main-blog-image">
                <img src={v.avatar} />
              </div>
              <div className="dashboard-blog-data">
                <div>
                <p style={{ fontWeight: "900" }}>{v.title}</p>
                </div>
                <div>
                <h2>{v.category}</h2>
                </div>
              </div>
            </div>
            <div className="dashboard-blog-handling">
              <p style={{ visibility: "hidden" }}>image</p>
              <div className="fav-icons">
                <Link href={`/blog/${v.slug}`}>
                  <i class="fa-solid fa-eye"></i>
                </Link>
                <i
                  class="fa fa-trash"
                  onClick={() => HandleDelete(v.slug)}
                  aria-hidden="true"
                ></i>
                <Link href={`edit/${v.slug}`}>
                  <i class="fas fa-edit"></i>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
 
  
    </>
  );
};

export default dashboard;

export async function getServerSideProps() {
  const response = await fetch("https://next-blog-liard-theta-11.vercel.app//api/getallblogs");
  const data = await response.json();
  return { props: { data } };
}


