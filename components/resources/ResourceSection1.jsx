'use client';
import {
  BrochureImg,
  BrochurePhoneImg,
  CircularDownArrow,
  LongDownArrow,
} from '@/utils/assets';
import { useMediaQuery } from '../../utils/custom-hooks';
import { downloadFile } from '../../utils/helper';
import { Button } from '../custom';
import Image from 'next/image';

const ResourceSection1 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <section className="relative p-5 pl-0 pt-20">
      <h2 className="mt-10 pl-5 font-metropolis text-5xl font-bold !leading-snug md:text-center lg:text-8xl 2xl:text-9xl">
        LOOKING <br className="md:hidden" /> FOR <br />{' '}
        <span className="text-red-base">RESOURCES?</span>
      </h2>
      <h4 className="py-5 pl-5 font-montserrat text-sm font-medium text-red-base md:text-center md:text-xl lg:text-2xl">
        WE HAVE GOT YOU COVERED.
      </h4>
      <Image
        src={CircularDownArrow}
        alt="down"
        className="mx-auto hidden w-[70px] md:block"
      />
      <Image
        src={LongDownArrow}
        alt="down"
        className="absolute right-4 top-52 md:hidden"
      />
      <div className="grid grid-cols-2 lg:gap-10 lg:p-20 lg:pb-0 2xl:px-40">
        <div>
          <Image
            src={isMobile ? BrochurePhoneImg : BrochureImg}
            alt={'brochure'}
            className="w-full md:w-[500px] lg:w-[580px] 2xl:w-[800px]"
          />
        </div>
        <div className="flex flex-col gap-5 text-right lg:gap-7 2xl:gap-12">
          <h4 className="font-metropolis text-xl font-bold md:mt-5 lg:text-6xl 2xl:mt-10 2xl:text-7xl">
            BROCHURES
          </h4>
          <p className="pl-5 font-montserrat text-xs md:pl-0 md:text-xl 2xl:text-3xl">
            Dive into a world of design possibilities as you explore our range
            of stunning brochures, filled with captivating imagery and detailed
            product information. From innovative surfaces to creative design
            ideas, our brochures are your ultimate resource for envisioning the
            perfect space.
            <span className="hidden md:inline">
              {' '}
              Immerse yourself in inspiration and let our brochures guide you on
              your design journey.
            </span>
          </p>
          <Button
            className={'ml-auto w-fit'}
            onClick={() => {
              downloadFile('/brochures.zip');
            }}
          >
            Download all
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection1;
