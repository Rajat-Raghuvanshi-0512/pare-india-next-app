'use client';
import { TrimWoodBg1 } from '@/utils/assets';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/css';
import TrimBgNavigation from './TrimBgNavigation';
import Image from 'next/image';

const Trims = ({ Jimages, trim }) => {
  return (
    <div className="relative  h-[500px] w-full font-montserrat text-white md:h-screen">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        className="z-auto h-[500px] !w-full md:h-full 2xl:px-40"
      >
        {Jimages.map((image, idx) => (
          <SwiperSlide className="!-z-50" key={image + idx}>
            <Image
              src={TrimWoodBg1}
              alt="bg"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
            <Image
              src={image}
              alt={'bg'}
              width={600}
              height={300}
              className={
                'absolute -right-5 -top-16 ml-auto h-full w-[90%] object-contain object-right lg:right-0 lg:top-0 lg:w-[70%]'
              }
              loading="eager"
            />
          </SwiperSlide>
        ))}
        <div className="absolute top-0 !z-10 text-center">
          <h2 className="py-5 text-3xl font-bold md:py-10 md:text-4xl lg:text-5xl">
            AVAILABLE TRIMS
          </h2>
          <p className="px-5 text-xs font-medium md:mx-32 md:text-xl">
            Our trims are the key to achieving a seamless and flawless look that
            radiates sophistication.
          </p>
        </div>
        <div className="absolute bottom-5 z-10 mx-5 mt-auto flex h-[60%] w-fit flex-col justify-end md:top-44 md:m-14 md:h-full md:justify-start">
          <h5 className="text-center font-metropolis text-2xl font-bold uppercase lg:text-3xl">
            trim options
          </h5>
          <TrimBgNavigation trims={trim} />
        </div>
      </Swiper>
    </div>
  );
};

export default Trims;
