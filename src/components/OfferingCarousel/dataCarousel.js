import p1 from "../../assets/Offering/p1.jpg";
import p2 from "../../assets/Offering/p2.jpg";
import p3 from "../../assets/Offering/p3.jpg";
import p4 from "../../assets/Offering/p4.jpg";
import p5 from "../../assets/Offering/p5.jpg";

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const productData = [
  {
    id: 1,
    imageurl: p1,
    name: "Cursuri de fitness de grup",
    description:
      "Dacă sunteți în căutarea unui mod distractiv și motivant de a vă atinge obiectivele de fitness, nu căutați mai departe decât cursurile de fitness de grup de la  FitnessClub.",
  },
  {
    id: 2,
    imageurl: p2,
    name: "Antrenament personal",
    description:
      "Dacă sunteți în căutarea unui mod distractiv și motivant de a vă atinge obiectivele de fitness, nu căutați mai departe decât cursurile de fitness de grup de la  FitnessClub.",
  },
  {
    id: 3,
    imageurl: p3,
    name: "24 ore acces",
    description:
      "Dacă sunteți în căutarea unui mod distractiv și motivant de a vă atinge obiectivele de fitness, nu căutați mai departe decât cursurile de fitness de grup de la  FitnessClub.",
  },
  {
    id: 4,
    imageurl: p4,
    name: "Membership flexibil",
    description:
      "Dacă sunteți în căutarea unui mod distractiv și motivant de a vă atinge obiectivele de fitness, nu căutați mai departe decât cursurile de fitness de grup de la  FitnessClub.",
  },
  {
    id: 5,
    imageurl: p5,
    name: "Performanta maxima",
    description:
      "Dacă sunteți în căutarea unui mod distractiv și motivant de a vă atinge obiectivele de fitness, nu căutați mai departe decât cursurile de fitness de grup de la  FitnessClub.",
  },
];
