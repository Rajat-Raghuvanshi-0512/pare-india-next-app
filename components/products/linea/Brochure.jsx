'use client';
import { BrochureBg } from '@/utils/assets';
import { Button } from '../../custom';
import { downloadFile } from '../../../utils/helper';
import Image from 'next/image';

const Brochure = () => {
  return (
    <div className="relative h-[300px]  2xl:px-20">
      <Image
        src={BrochureBg}
        alt={'bg'}
        className={'absolute left-0 top-0 -z-10 h-full w-full object-cover'}
      />
      <div className="flex h-full flex-col items-center justify-center gap-3 px-5 md:flex-row md:justify-between md:px-10 lg:px-20">
        <div className="md:flex-[1.3]">
          <h2 className="w-[90%] text-center font-metropolis text-3xl font-extrabold uppercase !leading-snug text-white md:text-left lg:text-5xl">
            View full range in product brochure
          </h2>
        </div>
        <div className="flex justify-end md:flex-[0.7]">
          <Button onClick={() => downloadFile('/brochures.zip')}>
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
