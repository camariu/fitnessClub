import { useEffect, useState } from "react";
import logoImage from "../../assets/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const logo = (
    <div onClick={() => navigate("/")} className="flex items-center">
      <img src={logoImage} className="h-[35px]"></img>
      <h2 className=" font-poetsen text-2xl font-extrabold tracking-wide  hover:cursor-pointer  sm:text-3xl ">
        Fitness<span className="text-blue-500">Club</span>
      </h2>
    </div>
  );

  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const fixNavbar = () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", fixNavbar);

    return () => {
      window.removeEventListener("scroll", fixNavbar);
    };
  }, []);

  return (
    <nav className="relative">
      <div className={scroll ? `fixed left-0 right-0 top-0 z-20 bg-white` : ""}>
        <div className="relative border-b-[2px]  shadow-md">
          <div className=" p-5 px-[30px]">
            <div className="flex items-center justify-between  ">
              <div>{logo}</div>
              <ul className="hidden cursor-pointer gap-4 sm:flex">
                <Link to="/plan">
                  <li className="text-center font-poetsen text-[10px]  font-semibold uppercase  tracking-wide text-stone-950 hover:text-cyan-900 sm:text-[15px]  md:text-[22px]">
                    propriul tău plan de antrenament
                  </li>
                </Link>
              </ul>
              <div className="flex items-center gap-4 font-semibold">
                <div className=" hidden items-center gap-3 text-black sm:flex">
                  <FaFacebook className="h-[30px] w-[30px] transition-transform   hover:scale-110 hover:cursor-pointer hover:text-blue-500 "></FaFacebook>
                  <FaInstagram className="h-[30px] w-[30px] transition-transform  hover:scale-110 hover:cursor-pointer hover:text-pink-500"></FaInstagram>
                  <h3 className=" font-poetsen hover:cursor-pointer sm:text-sm ">
                    Hai să ne cunoaștem
                  </h3>
                </div>
                <span className="ml-2 block sm:hidden">
                  <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6  "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                        />
                      </svg>
                    )}
                  </button>
                </span>
              </div>
              {isOpen && (
                <div className="absolute  left-0 top-[55px] z-10 mt-5 w-full  bg-white backdrop-blur-lg backdrop-opacity-100 backdrop-filter  sm:hidden">
                  <div className="flex flex-col items-center gap-3 py-8  ">
                    <ul className="flex   gap-3">
                      <li>
                        <FaFacebook className="h-[30px] w-[30px] transition-transform   hover:scale-110 hover:cursor-pointer hover:text-blue-500 "></FaFacebook>
                      </li>
                      <li>
                        <FaInstagram className="h-[30px] w-[30px] transition-transform  hover:scale-110 hover:cursor-pointer hover:text-pink-500"></FaInstagram>
                      </li>
                      <li>
                        <h3 className=" font-poetsen sm:text-sm">
                          Hai să ne cunoaștem
                        </h3>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform  text-2xl font-bold sm:text-3xl"></div>
        </div>
      </div>
    </nav>
  );
}
