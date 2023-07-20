import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Head from "next/head"


const format = ({children}) => {
  return (
    <div>


      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default format