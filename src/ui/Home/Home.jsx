import Footer from "../../components/Footer/Footer";
import Offering from "../../components/OfferingCarousel/Offering";
import Slider from "../../components/Slider/Slider";
import PropTypes from "prop-types";

const PageHeading = ({ heading }) => {
  return (
    <div>
      <div className="flex items-center justify-center border-b-2 border-black/25 px-[50px] py-[40px] font-poetsen">
        <h2 className="text-center text-2xl font-semibold   tracking-wide">
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <PageHeading heading={`FitneesClub Oferte`}></PageHeading>
      <Offering></Offering>
      <Footer></Footer>
    </div>
  );
}

PageHeading.propTypes = {
  heading: PropTypes.node,
};
