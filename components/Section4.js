import Link from "next/link";
import Author from "./_child/Author";
import Image from "next/image";

const Section4 = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          </div>
        </div>
      </div>
    </section>
  );
};

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/images/new.jpg"}
            className="rounded"
            height={350}
            width={300}
            alt="Image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            href={"/"}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most unhappy customers are your greatest source of of learning
          </Link>
        </div>
        <Author></Author>
      </div>
    </div>
  );
}

export default Section4;
