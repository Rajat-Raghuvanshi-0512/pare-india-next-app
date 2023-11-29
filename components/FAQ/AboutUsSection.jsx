'use client';
import { useRef } from 'react';
import { HeadAvatar } from '@/utils/assets';
import { useInView } from 'framer-motion';
import { desk, sofa, sofa1000 } from '@/utils/assets';
import Image from 'next/image';
import CountUp from 'react-countup';

const AboutSectionSm = () => {
  const numbersRef = useRef(null);
  const numbersInView = useInView(numbersRef);
  return (
    <section className="bg-black-base p-5 text-white md:p-10 lg:px-20  ">
      <h2 className="m-5 font-montserrat text-4xl font-bold leading-snug">
        “Contact our team now to achieve your dream space.”
      </h2>
      <div className="my-5 flex items-center justify-start md:my-10 lg:my-20">
        <div className="mt-5 flex gap-3">
          <Image src={HeadAvatar} alt="arun" width={60} className="mx-auto" />
          <div>
            <h4 className="font-montserrat text-xl font-medium">ARUN MAINI</h4>
            <p className="font-metropolis text-xs font-light">
              Head of Customer Service, Pare India
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-right font-metropolis text-3xl font-medium uppercase leading-snug">
        <span className="font-bold text-red-base">ABout us</span>
      </h3>
      <div className="flex">
        <div className="my-5 ml-auto mr-5 h-[200px] w-[220px] border border-red-base">
          <Image
            src={sofa}
            width={200}
            height={200}
            alt="sofa"
            className="-ml-3 mt-3 h-[200px] w-[220px] object-contain "
          />
        </div>
        <div>
          <p className="mr-2 mt-8 font-helvetica text-xs leading-tight">
            Our vision is to impart a global outreach to Indian made Interior
            products.
          </p>
          <p className="mr-2 mt-2 font-helvetica text-xs leading-tight">
            We identify innovative global trends and manufacture a matchless
            range in India.
          </p>
          {numbersInView && (
            <>
              <div className="mt-2 grid grid-cols-2">
                <p className="font-metropolis text-xl font-bold text-red-base">
                  <CountUp end={15} duration={3} />+
                </p>
                <p className="font-helvetica text-[5px]">Quality Products</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="font-metropolis text-xl font-bold text-red-base">
                  <CountUp end={45} duration={3} />+
                </p>
                <p className="font-helvetica text-[10px]">Shades TO CHoose </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="font-metropolis text-xl font-bold text-red-base">
                  <CountUp end={500} duration={2.5} />
                  K+
                </p>
                <p className="font-helvetica text-[10px]"> Happy Customers</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const AboutSectionLg = () => {
  const numbersRef = useRef(null);
  const numbersInView = useInView(numbersRef);
  return (
    <section className="bg-black-base p-5 text-white">
      <div className="md:p-10 lg:px-20">
        <h2 className="mx-5 text-center font-montserrat text-3xl font-bold md:mx-10 md:text-4xl lg:mx-32 lg:text-5xl">
          “Contact our team now to achieve your dream space.”
        </h2>
        <div className="my-5 flex items-center justify-center text-center md:my-10 lg:my-20">
          <div className="flex flex-col gap-3">
            <Image
              src={HeadAvatar}
              alt="arun"
              width={100}
              className="mx-auto"
            />
            <h4 className="font-montserrat text-xl font-medium lg:text-3xl">
              ARUN MAINI
            </h4>
            <p className="font-metropolis font-light">
              Head of Customer Service, Pare India
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 lg:mr-10  2xl:px-40">
        <div className="flex flex-col justify-end">
          <div className="ml-6 h-[300px] w-[300px] border-2 border-red-base lg:h-[450px] lg:w-[450px]">
            <Image
              src={sofa1000}
              width={500}
              height={500}
              alt="sofa"
              className="-ml-3 mt-3 h-[300px] w-[300px] object-contain lg:-ml-4  lg:mt-4 lg:h-[450px] lg:w-[450px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-end text-right">
          <h3 className="font-metropolis font-bold uppercase text-red-base md:text-4xl lg:text-5xl">
            About Us
          </h3>
          <p className="ml-10 mt-8 font-helvetica text-xl leading-tight lg:text-2xl">
            Our vision is to impart a global outreach to Indian made Interior
            products. We identify innovative global trends and manufacture a
            matchless range in India.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-5 lg:mt-14 lg:gap-10">
            <div
              className="-ml-5 hidden items-end gap-5 text-center uppercase md:flex"
              ref={numbersRef}
            >
              {numbersInView && (
                <>
                  <div>
                    <p className="font-metropolis text-xl font-bold text-red-base lg:text-2xl">
                      <CountUp end={15} duration={3} />+
                    </p>
                    <p className="font-helvetica text-xs">Quality Products</p>
                  </div>
                  <div>
                    <p className="font-metropolis text-xl font-bold text-red-base lg:text-2xl">
                      <CountUp end={45} duration={3} />+
                    </p>
                    <p className="font-helvetica text-xs">Shades TO CHoose </p>
                  </div>
                  <div>
                    <p className="font-metropolis text-xl font-bold text-red-base lg:text-2xl">
                      <CountUp end={500} duration={2.5} />
                      K+
                    </p>
                    <p className="font-helvetica text-xs"> Happy Customers</p>
                  </div>
                </>
              )}
            </div>
            <div>
              <div className="ml-auto h-[150px] w-[120px] border-2 border-red-base lg:h-[300px] lg:w-[250px]">
                <Image
                  src={desk}
                  width={265}
                  height={327}
                  alt="desk"
                  className="-ml-2 mt-2  h-full w-full  object-contain lg:-ml-3 lg:mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUsSection = () => {
  const numbersRef = useRef(null);
  const numbersInView = useInView(numbersRef);
  return (
    <div>
      <div className="md:hidden">
        <AboutSectionSm numbersRef={numbersRef} numbersInView={numbersInView} />
      </div>
      <div className="hidden md:block">
        <AboutSectionLg numbersRef={numbersRef} numbersInView={numbersInView} />
      </div>
    </div>
  );
};

export default AboutUsSection;
