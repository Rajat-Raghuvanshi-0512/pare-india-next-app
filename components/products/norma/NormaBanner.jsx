import {
  BannerBg,
  MaintainanceImg,
  NormaBannerWoodImg,
  NormaTitleImg,
  SuperQualityImg,
  UVResistanceImg,
} from '@/utils/assets'
import Image from 'next/image'

const NormaBanner = () => {
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
          <Image src={NormaTitleImg} alt={'easy'} width={250} className={'ml-5 md:mx-auto'} />
          <p className="px-5 pt-10 font-metropolis text-4xl font-bold uppercase !leading-snug md:text-center md:text-5xl lg:text-7xl">
            Premium Quality Interior Panels
          </p>
        </div>
      </div>
      <Image
        src={NormaBannerWoodImg}
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
            Experience the ultimate fusion of durability and beauty with Dura+ panels. Meticulously crafted, these
            exterior facades offer a timeless and long-lasting solution for your decorative needs.
          </div>
          <div className="hidden grid-cols-3 gap-10 md:grid">
            <div className="flex flex-col items-center gap-5">
              <Image src={SuperQualityImg} alt={'box'} width={82} height={82} className="h-[82px] object-contain" />
              <h6 className="font-metropolis font-bold 2xl:text-3xl">Superior Quality</h6>
              <p className="text-center font-montserrat md:text-sm 2xl:text-xl">
                Meticulously crafted to bring durability and elegance together.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Image src={MaintainanceImg} alt={'box'} width={82} height={82} className="h-[82px] object-contain" />
              <h6 className="font-metropolis font-bold 2xl:text-3xl">Long Life</h6>
              <p className="text-center font-montserrat md:text-sm 2xl:text-xl">
                Designed to stand the test of time, ensuring longevity and reduced maintenance.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Image src={UVResistanceImg} alt={'box'} width={82} height={82} className="h-[82px] object-contain" />
              <h6 className="font-metropolis font-bold 2xl:text-3xl">UV Resistant</h6>
              <p className="text-center font-montserrat md:text-sm 2xl:text-xl">
                System to withstand the harshest elements and protect against UV radiation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-3 gap-3 px-3 py-5 md:hidden">
          <div className="flex flex-col items-center gap-5">
            <Image src={SuperQualityImg} alt={'box'} width={50} height={50} className="h-[50px] object-contain" />
            <h6 className="text-center font-metropolis text-sm font-bold">Superior Quality</h6>
            <p className="text-center font-montserrat text-xs">
              Meticulously crafted to bring durability and elegance together.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image src={MaintainanceImg} alt={'box'} width={50} height={50} className="h-[50px] object-contain" />
            <h6 className="text-center font-metropolis text-sm font-bold">Long Life</h6>
            <p className="text-center font-montserrat text-xs">
              Designed to stand the test of time, ensuring longevity and reduced maintenance.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image src={UVResistanceImg} alt={'box'} width={50} height={50} className="h-[50px] object-contain" />
            <h6 className="text-center font-metropolis text-sm font-bold">UV Resistant</h6>
            <p className="text-center font-montserrat text-xs">
              System to withstand the harshest elements and protect against UV radiation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NormaBanner
