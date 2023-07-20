
import { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { signIn } from 'next-auth/react'
import Router from "next/router";


const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const router = Router

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn('credentials', {
        redirect: false,
        email,
        password
      });
      console.log(data)
      router.push("/")

    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
     
      <div className="formOuter">
        <h1 className="trendingFont font-bold text-4xl p-6 text-center">
          Login here
        </h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email: </label>
          <input
            required
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password: </label>
          <input
            required
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <div className="notAcc" style={{marginTop:"20px", textAlign:"center"}}>
            <span>if you don't have an account!</span>
            <Link className="link" href="/register" style={{marginLeft:"7px" , color:"blue" , borderBottom:"1px solid blue"}}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default login;
