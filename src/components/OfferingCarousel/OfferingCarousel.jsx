import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./dataCarousel";
import PropTypes from "prop-types";

export default function OfferingCarousel({ products }) {
  return (
    <div>
      <Carousel
        className="grid py-[45px]  "
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="all 500ms ease"
        transitionDuration={1000}
      >
        {products}
      </Carousel>
    </div>
  );
}

OfferingCarousel.propTypes = {
  products: PropTypes.node,
};
