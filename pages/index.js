import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Format from "@/layout/format";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

const index = ({ data }) => {
 console.log(data)
  return (
    <Format>
      <div className="width" >
        <Section1 props={data}></Section1>
        <Section2 blog={data}></Section2>
        <Section3></Section3>
      </div>
    </Format>
  );
};



export default index;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/getallblogs");
  const data = await response.json();
  return { props: { data } };
}
  