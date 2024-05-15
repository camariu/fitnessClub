import { textShort } from "../../utils/textshort";
import PropTypes from "prop-types";

export default function OfferingCarouselItems({ url, name, description }) {
  return (
    <div className="px-5 shadow-md">
      <div className="flex flex-col items-center gap-4">
        <img className="h-[300px] w-[300px]" src={url} alt=""></img>
        <h4 className="font-semibold uppercase">{textShort(name, 18)}</h4>
        <p className="px-1 text-center ">{textShort(description, 26)}</p>
      </div>

      <div className="flex justify-center py-7 ">
        <button className=" group group mt-4 inline-flex h-16 w-full overflow-visible rounded-full bg-[linear-gradient(#e9e9e9,#e9e9e9_50%,#fff)] p-1   transition-all duration-300">
          <div className="h-full w-full overflow-hidden rounded-full bg-[linear-gradient(to_top,#ececec,#fff)] p-1 shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] duration-300 hover:shadow-none">
            <div className=" black inline-flex h-full w-full items-center justify-center gap-4 gap-x-0.5 gap-y-0.5 overflow-hidden rounded-full bg-[linear-gradient(#f4f4f4,#fefefe)] px-2 py-2  text-[18px] text-xl font-bold uppercase tracking-wide text-blue-500 duration-200 group-hover:bg-[linear-gradient(#e2e2e2,#fefefe)]  group-hover:text-blue-500">
              Obține
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

OfferingCarouselItems.propTypes = {
  url: PropTypes.node,
  name: PropTypes.node,
  price: PropTypes.node,
  description: PropTypes.node,
};
