import Image from 'next/image';

const P1Section1 = ({ data }) => {
  return (
    <>
      <section className="md:px-10 lg:px-20 2xl:px-40">
        <div className="flex gap-5">
          <div className="flex-1">
            <Image
              src={data?.mainImage}
              alt={'img1'}
              className={
                'absolute -z-10 h-[350px] object-cover md:static md:h-full w-full'
              }
            />
          </div>
          <div className="flex h-[350px] flex-1 flex-col md:h-auto md:justify-end ">
            <div className="mb-16 ml-auto flex w-32 items-center justify-center bg-[#BE1E2DD9] pt-2 font-metropolis text-sm font-bold text-white md:-ml-20 md:mb-0 md:w-48 md:text-xl">
              <p className="mx-auto w-28 md:mx-auto md:w-40">
                {data?.techName}
              </p>
            </div>
            <p className="ml-auto w-full bg-red-base bg-opacity-80 py-5 pl-3 font-metropolis text-sm text-white md:mr-auto md:bg-transparent md:text-2xl md:text-black">
              {data?.techDesc}
            </p>
            <Image
              src={data?.sideImage}
              alt={'img2'}
              className={
                'hidden h-fit w-full object-contain object-bottom md:flex md:min-h-[300px]'
              }
            />
          </div>
        </div>
        <Image
          src={data?.sideImage}
          alt={'img3'}
          className={'mt-5 h-[170px] w-full object-cover md:hidden'}
        />
      </section>
      <div className="my-5 bg-red-base py-3 text-center font-metropolis font-medium text-white md:my-10 md:py-7 lg:text-5xl">
        Offered in {data?.variants} variants
      </div>
    </>
  );
};

export default P1Section1;
