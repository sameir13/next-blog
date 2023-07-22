import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { useSession, signOut } from "next-auth/react";
import { Toast, Toaster, toast } from "react-hot-toast";
import { useState } from "react";

const Header = () => {
  const { data } = useSession();
  const [select, setSelect] = useState(false);

  console.log(data);

  const HandleSignOut = () => {
    if (window.confirm("Are you sure you want to logOut") === true) {
      signOut();
      toast.success("Successfully Loggged Out");
    }
  };

  const toggleMenu = () => {
    setSelect(!select);
  };

  return (
    <>
      <Toaster />

      <div>
        <div className={select ? "open" : null}>
          <nav>
            <img src="/images/blogger.png"  />
          </nav>
          <div class="overlay"></div>

          <button class="burger" onClick={toggleMenu}>
            <i
              class="fa-solid fa-bars"
              style={{ color: "Black", fontSize: "26px" }}
            ></i>
            <i
              class="fa-solid fa-close"
              style={{ color: "Black", fontSize: "26px" }}
            ></i>
          </button>

          <aside>
            {data?.user ? (
              <div className="links">
                <Link className="nav-links" href="/">
                  Home
                </Link>
                <Link className="nav-links" href="/about">
                  About
                </Link>
                <Link className="nav-links" href="/create">
                  Write
                </Link>
                <Link className="nav-links" href="/register">
                  Register
                </Link>
                <span
                  children
                  className="nav-links"
                  style={{
                    cursor: "pointer",
                    border: "1px solid #56B85D",
                    marginTop: "10px",
                    backgroundColor: "#56B85D",
                    padding: "3px 10px",
                    color: "white",
                    borderRadius: "5px",
                  }}
                  onClick={HandleSignOut}
                >
                  Log out
                </span>
              </div>
            ) : (
              <>
                <div className="nav-links-logout">
                  <Link className="nav-links" href="/">
                    Home
                  </Link>
                  <Link className="nav-links" href={"/about"}>
                    About
                  </Link>

                  <Link href={"/login"} className="nav-links-btn">
                    Login
                  </Link>
                </div>
              </>
            )}
          </aside>
        </div>
      </div>
    </>
  );
};

export default Header;
