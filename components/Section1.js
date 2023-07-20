import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";

const Section1 = ({ props }) => {

   


  SwiperCore.use([Autoplay]);

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20 p-2">
        <h1 className="font-bold text-4xl pb-12 text-center ">Trending</h1>
        <Swiper
          autoplay={{
            delay: 4000,
          }}
          slidesPerView={1}
          loop={true}
        >
          {props?.Blog?.map((v) => {
            return (
              <SwiperSlide>
                <div className="grid md:grid-cols-2 gap-4" key={v._id}>
                  <div className="image h-full object-cover sliderimage">
                    <Link href={"#"}>
                      <Image
                        src={v.avatar}
                        alt=""
                        className="h-full w-full object-cover"
                        height={500}
                        width={560}
                      />
                    </Link>
                  </div>
                  <div className="info flex justify-center flex-col">
                    <div className="cat">
                      <Link
                        className="text-orange-600 hover:text-orange-800 ml-1 mb-2"
                        href={"/"}
                      >
                        {v.category}
                      </Link>
                      <Link
                        className="text-gray-800 hover:text-gray-600 ml-1"
                        href={"/"}
                      >
                        {new Date(v.createdAt).toDateString()}
                      </Link>
                    </div>
                    <div className="title">
                      <Link
                        href={`/blog/${v.slug}`}
                        className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600"
                      >
                        {v.title}
                      </Link>
                    </div>
                    <p className="text-gray-500 py-3">{v.subTitle}</p>
                    <Author />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;



