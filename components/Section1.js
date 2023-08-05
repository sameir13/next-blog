import React from "react";
import Slider from "react-slick";
import Author from "./_child/Author";
import Link from "next/link";

const Section1 = ({ props }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(props?.Blog);
  return (
    <section className="">
      <div className="Section-1-textbox">
        <h1>Trending</h1>
      </div>

      <Slider {...settings}>


{props?.Blog.map((v)=>(
        <div key={v._id}>
        <div className="Slider-section-1 MaxPad-2">
          <div className="SectionSliderImage">
            <img src={v.avatar}></img>

            <div className="daySection1">Aug</div>
          </div>
          <div className="SliderTextbox">
            <div className="DateSectionOne">
              <p>{new Date(v.createdAt).toDateString()}</p>-
              <p style={{ color: "orange" }}>{v.category}</p>
            </div>

            <div className="TitleSectionOne">
              <Link href={"/"}>
                <h1>
                 {v.title}
                </h1>
              </Link>
            </div>
            <div className="AuthorDivOne">
              <Author></Author>
            </div>
          </div>
        </div>
      </div>

))}

  
      </Slider>
    </section>
  );
};

export default Section1;
