import React from "react";
import Author from "./_child/Author";
import Link from "next/link";

const Section1 = () => {
  return (
    <section className="">
      <div className="Section-1-textbox">
        <h1>Trending</h1>
      </div>
      <div className="Slider-section-1 MaxPad-2">
        <div className="SectionSliderImage">
          <img src="/images/landscape.jpg"></img>
          <div className="categorySection1">Programming</div>
          <div className="daySection1">Aug</div>
        </div>
        <div className="SliderTextbox">
          <div className="DateSectionOne">
            <p>Wed jul 12 2023</p>
          </div>

          <div className="TitleSectionOne">
            <Link href={"/"}>
              <h1>
                7 Cool HTML Elements Nobody Uses 7 Cool HTML Elements Nobody
                Uses
              </h1>
            </Link>
          </div>
          <div className="AuthorDivOne">
            <Author></Author>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
