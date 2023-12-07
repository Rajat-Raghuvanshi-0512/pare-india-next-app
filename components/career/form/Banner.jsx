'use client';
import { CareerFormBanner, CareerFormBannerMobile } from '@/utils/assets';
import { useMediaQuery } from '../../../utils/custom-hooks';

import Image from 'next/image';

const Banner = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <section>
      <Image
        src={isMobile ? CareerFormBannerMobile : CareerFormBanner}
        alt={'banner'}
        width={'100%'}
        height={360}
        className={
          'absolute -z-10 h-[360px] w-screen object-cover object-top lg:h-[500px]'
        }
      />
      <div className="flex h-[390px] flex-col justify-center px-3 pt-14 text-white md:ml-auto md:w-[90%] lg:h-[520px]">
        <h1 className="mb-3 font-metropolis text-6xl font-bold md:text-7xl">
          Careers
        </h1>
        <p className="mr-20 font-montserrat text-base drop-shadow-sm md:w-[50%] md:text-xl md:drop-shadow-2xl">
          Join our team and be a part of our mission at PARÉ Innovations to
          innovate, create a better future, and make a difference.
        </p>
      </div>
    </section>
  );
};

export default Banner;
