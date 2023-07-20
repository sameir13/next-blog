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
      <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <h1 className="head">Bucket Blogs</h1>
          </div>

          {data?.user ? (
            <>
              <div className="order-3 flex justify-center">
                <div className="flex gap-6">
                  <Link className="nav-links" href="/">
                    Home
                  </Link>
                  <Link className="nav-links" href="/">
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
                    style={{ cursor: "pointer" }}
                    onClick={HandleSignOut}
                  >
                    Log out
                  </span>
                </div>
              </div>
              <div className="profileBox order-3">
                <h4 className="profile"> {data?.user?.name.charAt(0)} </h4>
                <Link href={"/dashboard"} style={{ textDecoration: "none" }}>
                  <span className="userName"> {data?.user?.name} </span>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-6 order-3">
                <Link className="nav-links" href="/">
                  Home
                </Link>
                <Link className="nav-links" href="/">
                  About
                </Link>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
