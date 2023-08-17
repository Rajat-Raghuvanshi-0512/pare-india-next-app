import { BottomRightArrow, GalleryBanner, GalleryPhoneBanner } from '@/utils/assets'
import Image from 'next/image'

const GalleryMain = () => {
  return (
    <div className="relative h-screen md:px-10 md:pt-20 2xl:px-40">
      <Image src={GalleryPhoneBanner} alt="gallery" className="-z-10 h-screen w-full md:hidden" />
      <Image
        src={GalleryBanner}
        alt="gallery"
        className="-z-10 hidden h-full w-full object-cover object-bottom md:block"
      />
      <div className="absolute bottom-0 flex w-[70%] gap-5 bg-white px-5 py-2 md:gap-10 md:p-5 md:pl-20 lg:w-fit lg:pl-32">
        <div>
          <h3 className="font-montserrat text-lg font-bold uppercase md:text-3xl lg:text-[2.5rem]">
            explore every detail
          </h3>
          <p className="font-metropolis text-xs uppercase md:pt-5 md:text-base">
            Take a Closer Look at Our Complete Project Showcase.
          </p>
        </div>
        <div>
          <Image src={BottomRightArrow} alt="arrow" className="h-[20px] w-[20px] lg:h-[40px] lg:w-[40px]" />
        </div>
      </div>
    </div>
  )
}

export default GalleryMain
