import Image from "next/image";
import Link from "next/link";
import Author from "./Author";

const related = () => {
  return (
    <section className="pt-20">
      <h1 className="font-bond text-3xl py-12">Related</h1>
      <div className="flex flex-col gap-10">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
};
function Post() {
  return (
    <div className="flex-row-gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/images/new.jpg"}
            alt=""
            className="rounded"
            height={250}
            width={200}
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

export default related;
