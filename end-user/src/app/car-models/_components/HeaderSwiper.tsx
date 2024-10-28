"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { register } from "swiper/element";
register();
import { Image } from "@nextui-org/react";
import swipeImg1 from "@/assets/images/asset-swipe-1.webp";
import swipeImg2 from "@/assets/images/asset-swipe-2.webp";
import swipeImg3 from "@/assets/images/asset-swipe-3.webp";

export default function HeaderSwiper() {
  return (
    <div className="lg:min-h-screen">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <Image
            src={swipeImg1.src}
            alt="Swiper 1"
            className="w-full object-cover"
            removeWrapper
            radius="none"
          />

          <div className="container p-4 md:p-8 absolute inset-0 flex flex-col justify-center z-20">
            <h1 className="text-2xl font-semibold uppercase leading-snug sm:text-5xl sm:leading-snug lg:text-7xl lg:leading-tight text-white">
              Explore Our <br /> Premium Selection
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={swipeImg2.src}
            alt="Swiper 2"
            className="w-full object-cover"
            removeWrapper
            radius="none"
          />

          <div className="container p-4 md:p-8 absolute inset-0 flex flex-col items-center justify-center z-20">
            <h1 className="text-2xl font-semibold uppercase leading-snug sm:text-5xl sm:leading-snug lg:text-7xl lg:leading-tight text-white text-center">
              Luxury Cars <br /> for Every Journey
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={swipeImg3.src}
            alt="Swiper 3"
            className="w-full object-cover"
            removeWrapper
            radius="none"
          />

          <div className="container p-4 md:p-8 absolute inset-0 flex flex-col items-end justify-center z-20">
            <h1 className="text-2xl font-semibold uppercase leading-snug sm:text-5xl sm:leading-snug lg:text-7xl lg:leading-tight text-white text-right">
              Affordable & Reliable <br /> Options
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
