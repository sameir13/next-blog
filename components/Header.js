import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { useSession, signOut } from "next-auth/react";
import { Toast, Toaster, toast } from "react-hot-toast";

const Header = () => {
  const { data } = useSession();

  console.log(data);

  const HandleSignOut = () => {
    if (window.confirm("Are you sure you want to logOut") === true) {
      signOut();
      toast.success("Successfully Loggged Out");
    }
  };
  return (
    <>
      <Toaster />
      <div className="header">
        <nav>
          <div className="logo">
            <h1>Bucket Blogs</h1>
          </div>

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
                <Link
                  href={"/login"}
                  className="nav-links"
                  style={{
                    cursor: "pointer",
                    border: "1px solid #56B85D",
                    backgroundColor: "#56B85D",
                    padding: "3px 10px",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  Login
                </Link>
              </div>
            </>
          )}

          <div className="HeaderHamMenu">
            <i class="fa-solid fa-bars"></i>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
