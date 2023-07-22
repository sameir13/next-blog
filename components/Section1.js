import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Section1 = ({ props }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20 p-2">
        <h1 className="font-bold text-4xl pb-12 text-center ">Trending</h1>

        <Slider {...settings}>
          
          {props?.Blog?.map((v) => {
            return (
              <div className="MainSec1SliderDiv" key={v._id}>
 
                <div className="MainSiderImagediv MaxSection1">
                  <Link href={"#"}>
                    <Image
                      src={v.avatar}
                      alt="Image"
                      className="h-full w-full object-cover"
                      height={600}
                      width={560}
                    />
                  </Link>
                </div>

              
                    <Link
                      className="Category"
                      href={"/"}
                    >
                      {v.category}
                    </Link>
                  
              </div>
            );
          })}
                  </Slider>
      </div>

    </section>
  );
};

export default Section1;
