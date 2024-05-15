import { useState } from "react";
import fp1 from "../../assets/FormPlan/fp1.jpg";
import FormPlan from "../FormPlan/FormPlan";
import Lottie from "lottie-react";
import smail from "../../assets/lottie/smail.json";

export default function PlanHero() {
  const [clickButton, setClickButton] = useState(false);
  const [displayText, setDisplayText] = useState(
    "Ne bucurăm că ai ajuns până aici, deja startul a fost dat. Încă un pas și antrenorii noștri îți vor crea planul de antrenament personalizat",
  );

  function handleClick() {
    setClickButton(true);
    setDisplayText(
      "Grozav, hai să ne spui câteva detalii și să vedem cum te putem ajuta pentru a obține un plan de antrenament perfect pentru tine. Mai jos avem un formular pe care te rugam sa il completezi",
    );
  }

  return (
    <div
      className="h-screen bg-[url(``)] bg-cover bg-center"
      style={{ backgroundImage: `url(${fp1})` }}
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="px-[50px] pt-[100px] text-center font-poetsen text-[15px] tracking-wide text-stone-200  sm:text-[25px]">
          {displayText}
          <Lottie
            animationData={smail}
            className={`${clickButton ? "hidden" : ""} h-[60px] pt-3 sm:hidden`}
          />
        </h3>
        <div>
          <button
            value={clickButton}
            onClick={handleClick}
            className={`${clickButton ? "hidden" : ""} group group mt-4 inline-flex h-16 w-full overflow-visible rounded-full bg-[linear-gradient(#e9e9e9,#e9e9e9_50%,#fff)] p-1 transition-all duration-300`}
          >
            <div className="h-full w-full overflow-hidden rounded-full bg-[linear-gradient(to_top,#ececec,#fff)] p-1 shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] duration-300 hover:shadow-none">
              <div className="black inline-flex h-full w-full items-center justify-center gap-4 gap-x-0.5 gap-y-0.5 overflow-hidden rounded-full bg-[linear-gradient(#f4f4f4,#fefefe)] px-[45px] py-2 text-[18px] text-xl font-bold uppercase tracking-wide text-blue-500 duration-200 group-hover:bg-[linear-gradient(#e2e2e2,#fefefe)]  group-hover:text-blue-500">
                Start
              </div>
            </div>
          </button>
        </div>
      </div>
      {clickButton === true && <FormPlan></FormPlan>}
    </div>
  );
}
