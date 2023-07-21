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
            <div className="py-7 MarGin">
              <Image
                src={blog.singleBlog.avatar}
                alt="Image"
                width={0}
                height={0}
              />
            </div>

            <div className="single-post-blog-data">
              <div className="single-post-blog-cat">
                {blog.singleBlog.category}
                
              </div>
             
              <div className="single-post-blog-date">
                {new Date(blog.singleBlog.createdAt).toDateString()}
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
  const response = await fetch(`http://localhost:3000/api/blog/${params.slug}`);
  const data = await response.json();
  return { props: { blog: data } };
}
