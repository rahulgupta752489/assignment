import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Navigation
} from "swiper/core";

import image1 from "./Images/img1.webp";
import image2 from "./Images/img2.webp";
import image3 from "./Images/img3.webp";
import image4 from "./Images/img4.webp";
import { FaLocationDot } from "react-icons/fa6";

SwiperCore.use([EffectCoverflow, Navigation]);

export default function App() {
  return (
    <div className="container">
        <h1 className="heading">Projects</h1>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={140}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}  
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="images"/>
          <div style={{marginLeft: "10px"}}>
            <p style={{marginTop: "1rem", fontSize: "1rem", fontWeight: "bold"}}>Whiteland Urban Resort</p>
            <p style={{fontSize: "0.9rem", fontWeight: "bold"}}><FaLocationDot />Sector 103, Gurgaon</p>
            <p style={{fontSize: "0.9rem", fontWeight: "bold"}}>₹ On Request</p>
            <button style={{backgroundColor: "black", color: "white", padding: "0.4rem", borderRadius :"0.6rem"}}>View More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="images"/>
          <div style={{marginLeft: "10px"}}>
            <p style={{marginTop: "1rem", fontSize: "1rem", fontWeight: "bold"}}>M3M Alltitude</p>
            <p style={{fontSize: "0.9rem", fontWeight: "bold"}}><FaLocationDot />Sector 65, Gurgaon</p>
            <p style={{fontSize: "0.9rem", fontWeight: "bold"}}>₹ On Request</p>
            <button style={{backgroundColor: "black", color: "white", padding: "0.4rem", borderRadius :"0.6rem"}}>View More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="images"/>
          <div style={{marginLeft: "10px"}}>
            <p style={{marginTop: "1rem", fontSize: "1rem", fontWeight: "bold"}}>M3M Mansion</p>
            <p style={{fontSize: "0.9rem", fontWeight: "bold"}}><FaLocationDot />Sector 113, Gurgaon</p>
            <p style={{fontSize: "0.9rem", fontWeight: "bold"}}>₹ On Request</p>
            <button style={{backgroundColor: "black", color: "white", padding: "0.4rem", borderRadius :"0.6rem"}}>View More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="images"/>
          <div style={{marginLeft: "10px"}}>
            <p style={{marginTop: "1rem", fontSize: "1rem", fontWeight: "bold"}}>DLF The Arbour</p>
            <p style={{fontSize: "0.9rem", fontWeight: "bold"}}><FaLocationDot />sector 103 Gurgaon</p>
            <p style={{fontSize: "0.9rem", fontWeight: "bold"}}>₹ On Request</p>
            <button style={{backgroundColor: "black", color: "white", padding: "0.4rem", borderRadius :"0.6rem"}}>View More</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
