"use client";
import { Partners } from "../components/Partners";

type Partner = {
  Image: string;
  name: string;
  Connetion: string;
  description: string;
};
export const Partnerdata: Partner[] = [
  {
    Image: "/Amunda.png",
    name: "Amunda",
    Connetion: "Trusted Partner",
    description: "Amunda is a company that IDK.",
  },
  {
    Image: "/ChingisRoad.png",
    name: "Chingis Road",
    Connetion: "Trusted Partner",
    description: "Chingis Road is apart of Khuns Group.",
  },
  {
    Image: "/Kailas.png",
    name: "Kailas",
    Connetion: "Trusted Partner",
    description:
      "Kailas is an international importing company that is part of Khuns Group.",
  },
  {
    Image: "/KhunsKitchen.png",
    name: "Khuns Kitchen",
    Connetion: "Trusted Partner",
    description:
      "Khuns Kitchen is a valued partner, known for its innovative approach and high-quality offerings.",
  },
];

const page = () => {
  return (
  <div className="py-12">
  <Partners Partners={Partnerdata} />
</div>
  );
};
export default page;
