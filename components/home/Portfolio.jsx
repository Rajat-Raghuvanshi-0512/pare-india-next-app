'use client'
import { useEffect, useRef } from 'react'
import {
  PortfolioBg,
  PortfolioImg1,
  PortfolioImg10,
  PortfolioImg11,
  PortfolioImg12,
  PortfolioImg13,
  PortfolioImg14,
  PortfolioImg15,
  PortfolioImg16,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg5,
  PortfolioImg6,
  PortfolioImg7,
  PortfolioImg8,
  PortfolioImg9,
} from '@/utils/assets'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'
import 'swiper/css'

const slider1 = [
  PortfolioImg1,
  PortfolioImg2,
  PortfolioImg3,
  PortfolioImg4,
  PortfolioImg9,
  PortfolioImg10,
  PortfolioImg11,
  PortfolioImg12,
]
const slider2 = [
  PortfolioImg5,
  PortfolioImg6,
  PortfolioImg7,
  PortfolioImg8,
  PortfolioImg13,
  PortfolioImg14,
  PortfolioImg15,
  PortfolioImg16,
]

const PortfolioSm = () => {
  return (
    <section className="relative">
      <div className="z-10 mx-3 my-5 grid grid-cols-2 gap-1 md:m-10 lg:m-16 2xl:mx-40">
        <Image
          src={PortfolioBg}
          alt={'bg'}
          className={'absolute -top-20 left-0 -z-20  h-[120%] w-full object-cover'}
          loading="lazy"
        />
        <div className="font-metropolis text-xl uppercase !leading-snug md:text-4xl lg:text-5xl">
          Explore our portfolio and discover some of our <span className="font-bold text-red-base">PAST WORK</span>
        </div>
        <div className="flex items-end font-helvetica text-sm  leading-[14px] md:text-xl lg:text-3xl">
          PARÉ has completed numerous innovative and world-class projects across the globe, showcasing our expertise in
          building materials and interior decor. Browse through our portfolio to see how we can help bring your vision
          to life.
        </div>
      </div>
      <div className="z-10 -mb-10 origin-left overflow-hidden">
        <Swiper
          spaceBetween={30}
          slidesPerView={'auto'}
          loop={true}
          className="portfolio-slider relative flex items-end gap-6 overflow-x-scroll"
          allowTouchMove={true}
        >
          {slider1.map((slide, idx) => (
            <SwiperSlide key={slide + idx}>
              <Image
                src={slide}
                alt="slide"
                height={280}
                className="max-h-[250px] min-h-[200px] min-w-[170px] max-w-[280px] object-contain object-bottom"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={30}
          slidesPerView={'auto'}
          loop={true}
          allowTouchMove={true}
          className="portfolio-slider-1 relative my-6 flex items-end gap-6 overflow-x-scroll"
        >
          {slider2.map((slide, idx) => (
            <SwiperSlide key={slide + idx}>
              <Image
                src={slide}
                alt="slide"
                height={280}
                className="max-h-[250px] min-h-[200px] min-w-[170px] max-w-[280px] object-contain object-top"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

const PortfolioLg = () => {
  const slider1Ref = useRef()
  const slider2Ref = useRef()

  const getScrollOffset = () => {
    slider1Ref.current.style.transform = `translateX(${window.pageYOffset.toFixed(1) / 2}px)`
    slider2Ref.current.style.transform = `translateX(-${window.pageYOffset.toFixed(1) / 2}px)`
    slider1Ref.current.style.transition = ' all 0.4s'
    slider2Ref.current.style.transition = ' all 0.4s'
  }
  useEffect(() => {
    window.addEventListener('scroll', getScrollOffset, { passive: true })
    return () => window.removeEventListener('scroll', getScrollOffset, { passive: true })
  }, [])
  return (
    <section className="relative">
      <div className="z-10 mx-3 my-5 grid grid-cols-2 gap-4 md:m-10 lg:m-16 2xl:mx-40">
        <Image
          src={PortfolioBg}
          alt={'bg'}
          className={'absolute -top-20 left-0 -z-20  h-[120%] w-full object-cover'}
          loading="lazy"
        />
        <div className="font-metropolis text-lg uppercase !leading-snug md:text-4xl lg:text-5xl">
          Explore our portfolio and discover some of our <span className="font-bold text-red-base">PAST WORK</span>
        </div>
        <div className="flex items-end font-helvetica text-xs  leading-[14px] md:text-xl lg:text-3xl">
          PARÉ has completed numerous innovative and world-class projects across the globe, showcasing our expertise in
          building materials and interior decor. Browse through our portfolio to see how we can help bring your vision
          to life.
        </div>
      </div>
      <div className="-my-40 h-fit w-[200vw] origin-left overflow-hidden md:m-0 md:w-full md:scale-100">
        <div className="portfolio-slider relative -left-[200vw] flex items-end gap-3 md:gap-10" ref={slider1Ref}>
          {slider1.map((slide, idx) => (
            <Image src={slide} alt="slide" key={slide + idx} className="object-contain object-bottom" loading="lazy" />
          ))}
        </div>
        <div
          className="portfolio-slider-1 relative -right-[100vw] my-10 flex items-start gap-3 md:gap-10"
          ref={slider2Ref}
        >
          {slider2.map((slide, idx) => (
            <Image src={slide} alt="slide" key={slide + idx} className="object-contain object-top" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  return (
    <div>
      <div className="md:hidden">
        <PortfolioSm />
      </div>
      <div className="hidden md:block">
        <PortfolioLg />
      </div>
    </div>
  )
}

export default Portfolio
