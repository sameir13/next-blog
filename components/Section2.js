import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import { useEffect, useState } from "react";
import axios from "axios";

const section2 = ({ blog }) => {
  return (
    <section className="Section1-Main MaxPad">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>




      <div className="MainSec2CardGrid">
        {blog?.Blog?.map((v) => {
          return (
            <div
              key={v._id}
              className="item mainbox shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <div className="images">
                <Image
                  src={v.avatar}
                  alt={v.avatarAlt}
                  height={550}
                  width={750}
                  className="main-images"
                />
              </div>
              <div className="info flex justify-center flex-col py-4 p-3">
                <div className="cat mb-3 flex justify-between ">
                  <Link
                    className="text-orange-600 hover:text-orange-800"
                    href={"/"}
                  >
                    {v.category}
                  </Link>
                  <Link
                    className="text-gray-800 hover:text-gray-600"
                    href={"/"}
                  >
                    {new Date(v.createdAt).toDateString()}
                  </Link>
                </div>
                <div className="title">
                  <Link
                    href={`/blog/${v.slug}`}
                    className="text-xl md:text-xl font-bold text-gray-800 hover:text-gray-600 "
                  >
                    {v.title}
                  </Link>
                </div>
                <p className="text-gray-500 py-3">{v.subTitle}</p>

                <Author />
              </div>
            </div>
          );
        })}
      </div>





    </section>
  );
};
export default section2;
