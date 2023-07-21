import Header from "@/components/Header"
import Footer from "@/components/Footer"
const About = () => {
  return (

    <div>

      <Header></Header>
      <div style={{ maxWidth: "1200px", margin: "auto" }} className="About">
        <div className="MainParentDiv">
          <div className="AboutPageContent">
            <h3>What We are?</h3>
            <h2>Our Introduction</h2>
            <p>
              MAS tech is the solution of your all image compressor without
              downgrading quality at one point. Media is the most powerful thing
              in the world and it is combination of audio videos and images. We
              are here to provide you best image converters according to your
              need wiith best quality and size in different ways as webp to jpg,
              jpg to webp, png to webp, webp to png no more problems of blurry
              quality after converting images from one form to another. Code
              Generating is the most difficult task but now you can aslo
              generate QR code for your business websites from here in just few
              minutes without having any trouble of generating code. Image
              compressing are used to make your image more smartest and best
              quality for viewers. Our aim is to fulfil your requirements
              accordingly your needs. Compress image in small size with same
              quality and less data storage required.
            </p>
          </div>
          <div className="AboutPageImage">
            <img src="/images/footerBg.jpg" alt="AboutLandingImage" />
          </div>
        </div>
        <div className="SubParent">
          <h2>Why Choose Us</h2>
          <p>
            we strive to provide an exceptional reading and writing experience
            for our users. In today's fast-paced digital world, staying
            connected and well-informed is more important than ever. That's why
            we have created a platform that combines user-friendly features,
            engaging content, and a vibrant community. In this article, we will
            explore the reasons why choosing our blog application is a smart
            decision for both readers and aspiring writers. blog application
            hosts a wide range of topics, ensuring there is something for
            everyone. Whether you're passionate about technology, fashion,
            health, or travel, our platform offers a rich collection of articles
            to cater to your interests. With a dedicated team of experienced
            writers and contributors, we constantly curate and deliver
            high-quality content that engages, educates, and entertains our
            readers.
          </p>
        </div>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default About