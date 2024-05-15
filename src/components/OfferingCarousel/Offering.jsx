import OfferingCarousel from "./OfferingCarousel";
import OfferingCarouselItems from "./OfferingsCarouselItems";
import { productData } from "./dataCarousel";

export default function Offering() {
  const productsList = productData.map((item) => (
    <div key={item.id}>
      <OfferingCarouselItems
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      ></OfferingCarouselItems>
    </div>
  ));
  return (
    <div>
      <OfferingCarousel
        OfferingCarousel
        products={productsList}
      ></OfferingCarousel>
    </div>
  );
}
