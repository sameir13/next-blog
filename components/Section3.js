import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const Section3 = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <Swiper slidesPerView={2}>
        <SwiperSlide> {Post()}</SwiperSlide>
        <SwiperSlide> {Post()}</SwiperSlide>
        <SwiperSlide> {Post()}</SwiperSlide>
        <SwiperSlide> {Post()}</SwiperSlide>
        <SwiperSlide> {Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
};

function Post() {
  return (
    <div className="grid">
      <div className="images pl-1">
        <Image src={"/images/landscape.jpg"} alt="" height={250} width={600} />
      </div>
      <div className="info flex justify-center flex-col py-4 p-1">
        <div className="cat">
          <Link className="text-orange-600 hover:text-orange-800" href={"/"}>
            Business, Travel
          </Link>
          <Link className="text-gray-800 hover:text-gray-600" href={"/"}>
            -June 4, 2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/SinglePost"}
            className="text-1xl md:text-2xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most unhappy customers are your greatest source of of learning
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section3;
