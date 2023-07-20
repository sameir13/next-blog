import { data } from "autoprefixer";
import { useState } from "react";

const cloudnary = () => {
  const [tempImage, setTempImage] = useState("");
  const [loading,setLoading] = useState(false)



  const uploadImageToCloudinary = async () =>{
    try {
      const data = new FormData()
      data.append("file",tempImage)
      data.append("upload_preset","Blog-images")

      setLoading(true)
      const res = await fetch("https://api.cloudinary.com/v1_1/sameer-13/image/upload",{
        body:data,
        method:"POST"
      })

      const jsonRes = await res.json()

      console.log(jsonRes)
      

      return jsonRes.secure_url

    } catch (error) {
      alert("Something went wronge on image upload!")
    }finally{
      setLoading(false)
    }
  }


  const submitBlog =async (e) =>{
    e.preventDefault()
    try {
      const imageURL =await uploadImageToCloudinary()
      // befor uploading blog checking image uploaded or not
      console.log(imageURL)
    } catch (error) {
      
    }
  }

  return (
    <div>
      {tempImage ? (
        <img width={400} src={URL.createObjectURL(tempImage)} alt="" />
      ) : (
        <div>
    
        <input type="file" onChange={(e) => setTempImage(e.target.files[0])} />
     
        </div>
      )}


      {loading && <h1>Loading...</h1>}


      <form onSubmit={submitBlog}>
        <button>Uplaod</button>
      </form>
    </div>
  );
};

export default cloudnary;
