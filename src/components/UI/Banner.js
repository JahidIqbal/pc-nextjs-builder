import Image from "next/image";
import bannerImage from "../../assests/pcbanner.jpeg";

const Banner = () => {
  return (
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex-row">
    //     <Image src={bannerImage} alt="banner" />
    //     <div>
    //       <h1 className="text-5xl font-bold">Box Office News!</h1>
    //       <p className="py-6">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com//Images/en-US/Lobby/TvWall/Month-End-Clearance-2023-TV-Wall_Banner_Mobile_1536x640.jpg?v=0a881ad2c4f28907d28d8416542d91101927d636)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Pick Parts. Build Your PC. Compare and Share.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
