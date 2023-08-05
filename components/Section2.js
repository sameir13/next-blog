import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import { useEffect, useState } from "react";
import axios from "axios";

const section2 = ({ blog }) => {
  let catblogs = [
    "tag-brown",
    "tag-red",
    "tag-blue",
    "tag-pink",
    "tag-purple",
    "tag-teal",
    "tag-brown",
    "tag-blue",
    "tag-pink",
    "tag-teal",
    "tag-red",
    "tag-purple",
    "tag-brown",
    "tag-red",
    "tag-blue",
    "tag-pink",
    "tag-purple",
    "tag-teal",
    "tag-brown",
    "tag-blue",
    "tag-pink",
    "tag-teal",
    "tag-red",
    "tag-purple",
  ];

  return (
    <section className="Section1-Main MaxPad">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="MainSec2CardGrid">
        {blog?.Blog?.map((v,i) => {
          return (
            <div
              key={v._id}
              className="item mainbox shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <div className="images">
                <img src={v.avatar} alt={v.avatarAlt} className="main-images" />
                <p  className={`tag ${catblogs[i]}`} > {v.category}</p>
              </div>

              <div className="Section2-CardContent">
                <div className="title">
                  <Link href={`/blog/${v.slug}`} className="Section2CardTitle">
                    {v.title}
                  </Link>
                </div>
                <div className="DateSection">
                  {new Date(v.createdAt).toDateString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default section2;
