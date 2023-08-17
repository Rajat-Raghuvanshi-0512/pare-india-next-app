import { BannerBg, BannerWoodImg, EasyLineaImg, GlobeImg, InterlockImg, MechanicImg } from '@/utils/assets'
import Image from 'next/image'

const LineaBanner = () => {
  return (
    <section className="2xl:px-40">
      <Image
        src={BannerBg}
        alt={'banner'}
        className="absolute left-0 top-0 -z-10 h-[550px] w-screen object-cover md:h-screen 2xl:h-[80vh]"
      />
      <div className="grid h-[550px] grid-cols-1 pt-40 text-white md:h-screen md:grid-cols-3 md:items-center md:justify-center md:pr-20 md:pt-20 2xl:h-[80vh]">
        <div className="hidden md:block"></div>
        <div className="md:col-span-2">
          <Image src={EasyLineaImg} alt={'easy'} width={200} className={'ml-5 md:mx-auto'} />
          <p className="px-5 pt-10 font-metropolis text-4xl font-bold uppercase !leading-snug md:text-center md:text-5xl lg:text-7xl">
            Premium Quality Interior Panels
          </p>
        </div>
      </div>
      <Image
        src={BannerWoodImg}
        alt={'banner-wood'}
        className="absolute top-[450px] w-[170px] md:top-[30%] md:w-[300px] lg:w-[400px]"
      />
      <div className="grid grid-cols-4 bg-red-base text-white md:h-screen md:grid-cols-3 md:items-center md:justify-center 2xl:-mx-40 2xl:h-[80vh]">
        <div className="col-span-1 "></div>
        <div className="col-span-3 pl-16 md:col-span-2 md:pl-0 md:pr-10 2xl:pr-40">
          <h2 className="w-full pt-5 text-center font-metropolis text-2xl font-bold uppercase leading-10 text-white md:text-5xl lg:text-6xl 2xl:text-7xl">
            KEY ADVANTAGES
          </h2>
          <div className="col-span-2 py-10 pr-2 text-center font-montserrat text-sm font-medium text-white md:text-xl 2xl:text-2xl">
            Revitalize your space effortlessly with Easy+, the ultimate easy-to-install system, for remarkable
            transformations. Say goodbye to complicated installations and hello to stunning results with Easy+&apos;s
            simplicity and convenience.
          </div>
          <div className="hidden grid-cols-3 gap-10 md:grid">
            <div className="flex flex-col items-center gap-5">
              <Image src={MechanicImg} alt={'box'} width={82} height={82} className="h-[82px] object-contain" />
              <h6 className="font-metropolis font-bold 2xl:text-3xl">Easy To Install</h6>
              <p className="text-center font-montserrat md:text-sm 2xl:text-xl">
                Transform your space effortlessly with our easy-to-install wall panel system.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Image src={GlobeImg} alt={'box'} width={82} height={82} className="h-[82px] object-contain" />
              <h6 className="font-metropolis font-bold 2xl:text-3xl">Recyclable</h6>
              <p className="text-center font-montserrat md:text-sm 2xl:text-xl">
                A sustainable solution that combines style and environmental consciousness.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Image src={InterlockImg} alt={'box'} width={82} height={82} className="h-[82px] object-contain invert" />
              <h6 className="font-metropolis font-bold 2xl:text-3xl">Advance Interlocking</h6>
              <p className="text-center font-montserrat md:text-sm 2xl:text-xl">
                Revolutionary system that effortlessly connects wall panels for a sleek, flawless finish.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-3 gap-3 px-3 py-5 md:hidden">
          <div className="flex flex-col items-center gap-5">
            <Image src={MechanicImg} alt={'box'} width={50} height={50} className="h-[50px] object-contain" />
            <h6 className="text-center font-metropolis text-sm font-bold">Easy To Install</h6>
            <p className="text-center font-montserrat text-xs">
              Transform your space effortlessly with our easy-to-install wall panel system.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image src={GlobeImg} alt={'box'} width={50} height={50} className="h-[50px] object-contain" />
            <h6 className="text-center font-metropolis text-sm font-bold">Recyclable</h6>
            <p className="text-center font-montserrat text-xs">
              A sustainable solution that combines style and environmental consciousness.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image src={InterlockImg} alt={'box'} width={50} height={50} className="h-[50px] object-contain invert" />
            <h6 className="text-center font-metropolis text-sm font-bold">Advance Interlocking</h6>
            <p className="text-center font-montserrat text-xs">
              Revolutionary system that effortlessly connects wall panels for a sleek, flawless finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LineaBanner
