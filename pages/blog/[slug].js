import Author from "@/components/_child/Author";
import Format from "../../layout/format";
import Image from "next/image";
import Related from "../../components/_child/related";
import { useState } from "react";
const singleBlog = ({ blog }) => {
  const [edit, setEdit] = useState(blog.singleBlog);
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div>
      <Format>
        <section className="MaxPad">
          <div className="flex justify-center">
            <Author></Author>
          </div>

          <div className="post py-10">
            <h1 className="font-bold text-4xl text-center">
              {blog.singleBlog.title}
            </h1>
            <p className="text-gray-500 text-xl text-center py-5">
              {blog.singleBlog.subTitle}
            </p>

            <div className="singlePostImage">
              <img src={blog.singleBlog.avatar} alt="Image" />
            </div>

            <div className="SinglePostShareDash">
              <div className="DashBoardMain">
                <div className="dashMain-1">
                  <div className="dashContent">
                    <i class="fa-regular fa-heart"></i>
                    <span>Like</span>
                  </div>
                  <div className="dashContent">
                    <i class="fa-regular fa-comment"></i>
                    <span>Comment</span>
                  </div>
                </div>

                <div className="dashMain-2">
                  <div className="dashContentSub">
                    <i class="fa-regular fa-share-from-square"></i>
                    <span>Share</span>
                  </div>
                  <div className="dashContentSub">
                    <i class="fa-solid fa-headphones-simple"></i>
                    <span>Listen</span>
                  </div>
                
                </div>
              </div>
            </div>

            <div className="SinglePageDesc">
              <>
                <div
                  dangerouslySetInnerHTML={createMarkup(blog.singleBlog.desc)}
                ></div>

                <div className="singleBlogDiv">
                  <p style={{ color: "blue", cursor: "pointer" }}></p>
                </div>
              </>
            </div>
          </div>
        </section>
      </Format>
    </div>
  );
};

export default singleBlog;

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://next-blog-hazel-kappa.vercel.app//api/blog/${params.slug}`
  );
  const data = await response.json();
  return { props: { blog: data } };
}
