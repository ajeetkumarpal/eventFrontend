
import React from "react";
import Chance from "chance";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import {
  rashi,yash,vijay,vijaydever,south,south2,south3,sourya,son,shreelila,sarukhan,salman,sairiyanaudu2,
  rampothnani,priyawarrier,prabhash,nitin,megha2,kirtishetti,kirtisuresh,kalyani,kapildance,jayakisori,
  hritik,emran,dwarika,aluarjun,anupma,bollywoodactress
} from "../assets/reviewimg.js";

const reviewImages = [
  rashi,yash,vijay,vijaydever,south,south2,south3,sourya,son,shreelila,sarukhan,salman,sairiyanaudu2,
  rampothnani,priyawarrier,prabhash,nitin,megha2,kirtishetti,kirtisuresh,kalyani,kapildance,jayakisori,
  hritik,emran,dwarika,aluarjun,anupma,bollywoodactress
];

const chance = new Chance();

const Review = () => {
  return (
<div className="bg-white py-12 "> 
  <h2 className="text-3xl font-bold text-center mb-10 hover:tracking-[2px] text-gray-800">
    Review of Events
  </h2>

  <Swiper
    modules={[Autoplay]}
    slidesPerView={5}
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
  >
    {reviewImages.map((img, id) => {
      const properSentence = Array.from({ length: 30 }, () => chance.word()).join(" ");
      return (
        <SwiperSlide
          key={id}
          className="flex flex-col items-center p-3 border border-gray-300 rounded-lg h-auto"
        >
          <div className="w-48 h-48 overflow-hidden">
            <img
              src={img}
              className="w-full h-full object-cover rounded-full transition-all duration-300 hover:rounded-none hover:duration-100 hover:scale-110"
            />
          </div>
          <p className=" text-center mt-4 mb-2 w-64 h-27.5 overflow-hidden border border-gray-200 p-2 rounded text-black font-semibold">
            <strong>Reviewer:</strong> {properSentence}
          </p>
        </SwiperSlide>
      );
    })}
  </Swiper>
</div>


  );
};

export default Review;
