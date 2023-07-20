import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });

      if (toast.success("User Registered Successfully")) {
        router.push("/login");
      } else {
        toast.error("Something went wrong try again");
      }

      console.log(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Toaster />

      <h1 className="trendingFont font-bold text-4xl p-6 text-center">
          Register here
        </h1>
      <div className="form-flex">
    
        <form className="register-form" onSubmit={SubmitHandler}>
          <div className="input-div">
            <label className="form-lables">Username:</label>
            <br></br>
            <input
              onChange={(e) => setName(e.target.value)}
              className="form-inputs"
              placeholder="Name?"
              name="name"
              autocomplete="off"
              id="name"
              type="text"
            />
          </div>
          <div className="input-div">
            <label className="form-lables">Email:</label>
            <br></br>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="form-inputs"
              placeholder="Email?"
              name="email"
              autocomplete="off"
              id="email"
              type="email"
            />
          </div>
          <div className="input-div">
            <label className="form-lables">Password:</label>
            <br></br>

            <input
              onChange={(e) => setPassword(e.target.value)}
              className="form-inputs"
              placeholder="Password?"
              name="password"
              id="password"
              autocomplete="off"
              type="password"
            />
          </div>
          <div className="submit">
            <button className="submit button">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
