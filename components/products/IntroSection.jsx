import { ProductHeroImg, ScrollDown } from '@/utils/assets'
import Image from 'next/image'

const IntroSection = () => {
  return (
    <section className="relative z-10 h-[400px] w-full py-20 text-white md:h-auto md:p-16 md:text-black lg:pt-28 2xl:px-40">
      <h2 className="mx-auto w-[70%] text-center font-metropolis text-xl font-medium leading-5 md:w-full md:text-4xl lg:text-5xl">
        Transform Your Space with Our Stunning Collection of Products.
      </h2>
      <div className="relative">
        <p className="mb-2 mt-2 px-5 text-center font-metropolis text-sm font-light md:ml-auto md:mt-10 md:w-[400px] md:text-left md:text-base lg:mt-20 lg:text-xl">
          Redefine your surroundings and indulge in the art of design with PARÉ&apos;s stunning products.
        </p>
        <Image
          src={ScrollDown}
          alt={'scroll'}
          width={50}
          height={50}
          className={
            'absolute left-[50%] top-[400%] -translate-x-[50%] -translate-y-[50%] invert md:top-[50%] md:invert-0'
          }
        />
      </div>
      <Image
        src={ProductHeroImg}
        alt={'hero-img'}
        width={1700}
        height={600}
        className={'absolute left-0 top-16 -z-20 h-[300px] w-full object-cover md:static md:h-auto'}
      />
      <div className="absolute left-0 top-16 -z-10 h-[300px] w-screen bg-black/50 md:hidden"></div>
    </section>
  )
}

export default IntroSection
