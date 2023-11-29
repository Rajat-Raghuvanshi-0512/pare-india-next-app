'use client';
import { useRef } from 'react';
import { Chair1000, Chair400, Chair700 } from '@/utils/assets';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
const AboutUs = () => {
  const numbersRef = useRef(null);
  const numbersInView = useInView(numbersRef);

  return (
    <div className="md:p-10">
      <h2 className="my-10 mb-5 font-montserrat text-4xl font-bold uppercase md:mb-5 md:mt-0 md:text-3xl lg:text-4xl">
        About us
      </h2>
      <div className="flex flex-col gap-5 md:flex-row">
        <p className="flex-1 font-montserrat text-base">
          PARÉ Innovations is a leading player in the building material segment,
          specializing in top-notch surfaces for ceilings, walls, and facade
          systems. At PARÉ, we take immense pride in being at the forefront of
          innovation, introducing groundbreaking surfaces that have never been
          seen before in India.
        </p>
        <p className="flex-1 font-montserrat text-base">
          With our commercial base in Mumbai and our state-of-the-art
          manufacturing facility located near Vapi, Gujarat, PARÉ is
          strategically positioned to serve the needs of our valued customers.
          Our founders have deep roots in the building material industry, which
          has propelled us to become pioneers in the Innovative Products
          revolution.
        </p>
      </div>
      <div className="my-7">
        <Image
          src={Chair400}
          alt={'chair'}
          srcSet={`${Chair400} 400w,${Chair700} 700w ,${Chair1000} 1000w`}
          width={1000}
          height={800}
          className={'h-full w-full'}
        />
      </div>
      <div>
        <div
          className="grid grid-cols-4 gap-5 py-5 md:gap-10  md:py-10 lg:gap-20"
          ref={numbersRef}
        >
          {numbersInView && (
            <>
              <div>
                <p className="w-[90%] border-b border-black  text-center font-metropolis text-xl font-bold md:border-b-2 md:text-left md:text-4xl lg:text-5xl">
                  <CountUp end={15} duration={4} />+
                </p>
                <p className="py-1 text-center font-montserrat text-[10px] font-medium leading-3 md:py-3 md:text-left md:text-lg lg:text-xl">
                  Quality Products
                </p>
              </div>
              <div>
                <p className="w-[90%] border-b border-black text-center font-metropolis text-xl font-bold md:border-b-2 md:text-left md:text-4xl lg:text-5xl">
                  <CountUp end={45} duration={2} />+
                </p>
                <p className="py-1 text-center font-montserrat text-[10px] font-medium leading-3 md:py-3 md:text-left md:text-lg lg:text-xl">
                  Shades to choose
                </p>
              </div>
              <div>
                <p className="w-[90%] border-b border-black text-center font-metropolis text-xl font-bold md:border-b-2 md:text-left md:text-4xl lg:text-5xl">
                  <CountUp end={200} duration={2} />+
                </p>
                <p className="py-1 text-center font-montserrat text-[10px] font-medium leading-3 md:py-3 md:text-left md:text-lg lg:text-xl">
                  Cities Served
                </p>
              </div>
              <div>
                <p className="w-[90%] border-b border-black text-center font-metropolis text-xl font-bold md:border-b-2 md:text-left md:text-4xl lg:text-5xl">
                  <CountUp end={5000} duration={2} />+
                </p>
                <p className="py-1 text-center font-montserrat text-[10px] font-medium leading-3 md:py-3 md:text-left md:text-lg lg:text-xl">
                  Architectural projects
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="my-10 flex flex-col gap-5 font-metropolis">
        <div className="flex justify-between gap-5">
          <div className="flex-[0.8] text-lg font-bold uppercase text-red-base md:flex-[0.5] md:text-2xl lg:text-2xl">
            Pan-India Presence
          </div>
          <div className="flex-[1.2] text-right text-xs md:flex-[1.5] md:text-left md:text-lg lg:text-xl">
            Unlocking Possibilities, Nationwide! We are proud to announce our
            Pan-India Presence, a testament to our commitment in serving you
            better, no matter where you are in this vast and diverse nation.
            With our extensive network spanning across every corner of India, we
            bring our products and services right to your doorstep.
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex-[0.8] text-lg font-bold uppercase text-red-base md:flex-[0.5] md:text-2xl lg:text-2xl">
            Manufacturing Unit
          </div>
          <div className="flex-[1.2] text-right text-xs md:flex-[1.5] md:text-left md:text-lg lg:text-xl">
            PARÉ Innovations prides itself on its state-of-the-art manufacturing
            unit, which utilizes advanced European technology to manufacture
            products of superior quality products, PARE carries 10+ product
            categories available in 25+ shades with 3 of them being first time
            in the world product and systems.
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex-[0.8] text-lg font-bold uppercase text-red-base md:flex-[0.5] md:text-2xl lg:text-2xl">
            Research and Development
          </div>
          <div className="flex-[1.2] text-right text-xs md:flex-[1.5] md:text-left md:text-lg lg:text-xl">
            Our pioneering R&D team creates innovative interior solutions,
            pushing the boundaries of design and transforming spaces in India
            and beyond with First Time in India and First Time in The World
            products. The EASY+ Technology which is a First time in the world
            product is truly a marvel due to the low installation time,
            affordable cost and supremely aesthetic look.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
