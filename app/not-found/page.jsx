'use client';
import { NotFoundBg, NotFoundWebBg } from '@/utils/assets';
import { Button } from '../../components/custom';
import { useMediaQuery } from '@/utils/custom-hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <div className="fixed z-[1000] flex h-screen w-full flex-col items-end justify-center bg-red-base pr-8 font-metropolis md:pr-20">
        {isMobile ? (
          <Image
            src={NotFoundBg}
            alt="nf"
            className="absolute left-0 top-0 -z-10 h-full w-full object-contain"
          />
        ) : (
          <Image
            src={NotFoundWebBg}
            alt="nf"
            className="absolute left-0 top-0 -z-10 h-full w-full object-contain object-left"
          />
        )}

        <div className="flex flex-col gap-5 py-5 text-right text-6xl font-bold uppercase text-white drop-shadow-sm lg:text-8xl">
          <h1>Error</h1>
          <h2>404</h2>
        </div>
        <Button
          className="mt-5 !bg-white !text-xl !text-red-base hover:scale-95 lg:!px-10 lg:!text-3xl"
          onClick={() => router.push('/')}
        >
          go back to home
        </Button>
      </div>
    </>
  );
};

export default NotFound;
