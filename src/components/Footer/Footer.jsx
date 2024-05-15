import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const logo = (
    <div>
      <h2 className="font-poetsen text-2xl font-bold text-white">
        Fitness<span className="text-blue-500">Club</span>
      </h2>
    </div>
  );
  return (
    <>
      <section className="mt-8 bg-black ">
        <div className=" mx-auto flex h-[150px] items-center justify-between gap-5 px-[30px]">
          <div className="flex items-center gap-3 text-white">
            <FaFacebook className="h-[30px] w-[30px] transition-transform hover:scale-110 hover:cursor-pointer hover:text-blue-500 "></FaFacebook>
            <FaInstagram className="h-[30px] w-[30px] transition-transform  hover:scale-110 hover:cursor-pointer hover:text-pink-500"></FaInstagram>
            <h3 className="sm:text-md font-poetsen">Hai să ne cunoaștem</h3>
          </div>
          <Link
            to="/plan"
            className="sm:text-1xl group relative overflow-hidden border border-green-500 p-[10px] text-center font-poetsen tracking-wide text-white  sm:p-4"
          >
            Solicită plan personalizat
            <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black tracking-wide opacity-0 transition-opacity duration-1000 ease-in-out  group-hover:opacity-100">
              <span className="tracking-wide  sm:text-2xl">Goo!!</span>
            </span>
          </Link>
        </div>
      </section>
      <section className="bg-black">
        <div className="  mx-auto grid grid-cols-2 gap-4 border-t-2 px-[30px] py-7 sm:grid-cols-3 md:grid-cols-5">
          <div>{logo}</div>
          <div className="text-white">
            <p className="pb-5 font-semibold">Caracteristici</p>
            <ul>
              <li>
                <a href="#home">Antrenamente personalizate</a>
              </li>
              <li>
                <a href="#home">Analistică</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <p className="pb-5 font-semibold">Resurse</p>
            <ul>
              <li>
                <a href="#home">Antrenamente personalizate</a>
              </li>
              <li>
                <a href="#home">Analistică</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <p className="pb-5 font-semibold">Compani</p>
            <ul>
              <li>
                <a href="#home">Antrenamente personalizate</a>
              </li>
              <li>
                <a href="#home">Analistică</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <p className="pb-5 font-semibold">Parteneri</p>
            <ul>
              <li>
                <a href="#home">Antrenamente personalizate</a>
              </li>
              <li>
                <a href="#home">Analistică</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
