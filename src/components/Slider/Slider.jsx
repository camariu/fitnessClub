import { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import pictures1 from "../../assets/pictures1.jpg";
import pictures2 from "../../assets/pictures2.jpg";
import pictures3 from "../../assets/pictures3.jpg";
import { useNavigate } from "react-router";

export default function Slider() {
  const slides = [
    { picture: pictures1 },
    { picture: pictures2 },
    { picture: pictures3 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => {
    const isFisrstSlide = currentIndex === 0;
    const newIndex = isFisrstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }

    return () => clearInterval(slideInterval);
  }, [currentIndex, intervalTime, autoScroll]);

  return (
    <div className=" ">
      <div className="group relative h-[600px]  ">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].picture})` }}
          className="h-full  w-full bg-cover bg-center duration-500 "
        >
          <div className="absolute left-[50%] top-[90%] flex -translate-x-[50%] gap-2  ">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => dotNextSlide(index)}
                className="cursor-pointer"
              >
                <FaRegDotCircle></FaRegDotCircle>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-5 top-[50%] ml-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/40 p-2 text-2xl text-white group-hover:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
            onClick={prevSlide}
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute right-5 top-[50%] mr-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/40 p-2 text-2xl text-white group-hover:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
            onClick={nextSlide}
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className=" absolute left-1/2 top-1/4 flex   -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md px-4 pt-[180px] sm:h-56 sm:w-96  ">
          <div className="flex flex-col items-center">
            <h2 className=" pt-[50px] text-center font-poetsen text-[30px] font-bold leading-[40px] tracking-wide text-stone-100 sm:text-[40px]  sm:leading-[55px] ">
              Bine ai venit la FitnessClub
            </h2>
            <p className="  pb-[90px] pt-9 text-center font-poetsen text-sm font-extralight  tracking-wide text-blue-500 sm:pb-[120px]">
              Personalizează propriul plan de antrenament cu cei mai buni
              antrenori de pe piață
            </p>
          </div>

          <div>
            <button
              onClick={() => navigate("/plan")}
              className="  group group mt-4 inline-flex h-16 w-full overflow-visible rounded-full bg-[linear-gradient(#e9e9e9,#e9e9e9_50%,#fff)] p-1 transition-all duration-300"
            >
              <div className="h-full w-full overflow-hidden rounded-full bg-[linear-gradient(to_top,#ececec,#fff)] p-1 shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] duration-300 hover:shadow-none">
                <div className=" black inline-flex h-full w-full items-center justify-center gap-4 gap-x-0.5 gap-y-0.5 overflow-hidden rounded-full bg-[linear-gradient(#f4f4f4,#fefefe)] px-[75px] py-2 text-[18px]     font-bold  uppercase  tracking-wide text-[#101010] duration-200 group-hover:bg-[linear-gradient(#e2e2e2,#fefefe)] group-hover:text-blue-500 ">
                  Obține
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
