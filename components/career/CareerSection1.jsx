'use client';
import { Career1 } from '@/utils/assets';
import Button from '../custom/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CareerSection1 = () => {
  const router = useRouter();
  return (
    <section className="p-5 pt-20 md:p-10 lg:p-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="pt-8">
          <p className="font-montserrat text-xs font-semibold lg:text-sm">
            For creative Individuals
          </p>
          <h2 className="ml-auto w-[80%] py-5 text-right font-metropolis text-5xl font-bold !leading-tight text-red-base md:w-auto md:py-0 md:text-left lg:text-7xl">
            WORK FOR PARE INDIA
          </h2>
          <p className="w-[70%] font-montserrat text-xs md:w-auto md:text-base lg:text-xl">
            Join our team at PARE Innovations and be part of our mission-driven
            journey. Experience the thrill of a dynamic and fast-paced
            environment, where your talent and passion can make a real impact.
            Together, let&apos;s create innovative solutions and shape the
            future of our industry.
          </p>
          <Button
            className={'hidden md:mt-4 md:block lg:mt-6'}
            onClick={() => router.push('/career-form')}
          >
            apply now
          </Button>
        </div>
        <div className="p-4 pl-10 md:p-0">
          <div className="relative">
            <div className="absolute -top-3 left-3 -z-50 h-full w-full  border-2 border-red-base"></div>
            <Image
              src={Career1}
              alt={'career1'}
              width={550}
              height={415}
              className=" mt-3 h-full w-full  lg:mt-5"
            />
          </div>
          <Button
            className={'mt-5 !px-14 md:mt-4 md:hidden lg:mt-6'}
            onClick={() => router.push('/career-form')}
          >
            apply now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerSection1;
