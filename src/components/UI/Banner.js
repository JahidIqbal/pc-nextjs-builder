import Image from "next/image";
import bannerImage from "../../assests/pcbanner.jpeg";

const Banner = () => {
  return (
    <div>
    <div className="carousel w-full h-full">
      <div className="carousel-item w-full">
        <Image src={bannerImage} alt="" className="w-full" />
      </div>
    </div>
  </div>
  );
};

export default Banner;
