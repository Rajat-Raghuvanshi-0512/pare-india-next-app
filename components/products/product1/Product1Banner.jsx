'use client';
import Image from 'next/image';
import { useMediaQuery } from '../../../utils/custom-hooks';

const Product1Banner = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <section className="relative h-[580px]">
      <Image
        src={isMobile ? data?.bannerPhoneImg : data?.bannerImg}
        alt={'banner'}
        className={'absolute -z-10 h-[400px] w-full object-cover object-bottom'}
      />
      <div className="absolute -bottom-3 w-full p-5 md:bottom-20 md:px-10 lg:bottom-16 lg:px-20">
        <h6 className="font-montserrat text-xl text-white lg:text-lg">
          {data?.headText}
        </h6>
        <h2 className="py-5 font-metropolis text-6xl font-bold !leading-tight text-red-base md:w-[75%] md:py-0 md:text-left lg:w-[55%] lg:text-7xl">
          {data?.mainText}
        </h2>
      </div>
    </section>
  );
};

export default Product1Banner;
