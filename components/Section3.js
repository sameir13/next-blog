import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const Section3 = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="MainSectionGrid MaxPad">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <Slider {...settings} className="MainSliderSection3">
          <div>
         { Post()}
          </div>
          <div>
        {  Post()}
          </div>
          <div>
        {  Post()}
          </div>
          <div>
        {  Post()}
          </div>
          <div>
        {  Post()}
          </div>
          <div>
        {  Post()}
          </div>
          <div>
        {  Post()}
          </div>
          <div>
        {  Post()}
          </div>
        </Slider>
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
            className="SingleBlogMainTitle"
          >
            Your most unhappy customers are your greatest source of of learning
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section3;
