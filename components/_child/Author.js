import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"

const Author = () => {
  const { data } = useSession();


  return (
    <div className="author flex py-5">
    <Image src={"/images/download.jpeg"} className="rounded-full" alt="Image" height={60} width={60}/> 
    <div className="flex flex-col justify-center px-4">
    <Link href={"/"} className="text-md font-bold text-gray-800 hover:text-gray-600">{data?.user?.name}</Link>
     <span className="text-sm text-gray-500">CEO and Founder</span>
    </div>
    </div>
  )
}

export default Author