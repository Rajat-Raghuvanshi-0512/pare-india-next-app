'use client'
import { useSwiper } from 'swiper/react'
import { LeftArrow, LeftArrowMobile, RightArrow, RightArrowMobile } from '@/utils/assets'
import Image from 'next/image'

const TestimonialSlider = ({ testmonialActiveNo, settestmonialActive }) => {
  const swiper = useSwiper()
  return (
    <div>
      <div className="flex items-center justify-center gap-5">
        <Image
          src={LeftArrow}
          alt={'larrow'}
          width={40}
          height={10}
          className={'hidden cursor-pointer md:block'}
          onClick={() => {
            swiper.slidePrev()
          }}
        />
        <div className="font-metropolis text-base font-light md:text-xl">0{testmonialActiveNo}/02</div>
        <Image
          src={RightArrow}
          alt={'rarrow'}
          width={40}
          height={10}
          className={'hidden cursor-pointer md:block'}
          onClick={() => {
            swiper.slideNext()
          }}
        />
      </div>
      <div className="md:hidden">
        <Image
          src={LeftArrowMobile}
          alt={'prev'}
          width={20}
          height={20}
          className={'absolute left-4 top-[45%] z-20'}
          onClick={() => {
            swiper.slidePrev()
            testmonialActiveNo == 1 ? settestmonialActive(2) : settestmonialActive(1)
          }}
        />
        <Image
          src={RightArrowMobile}
          alt={'prev'}
          width={20}
          height={20}
          className={'absolute right-4 top-[45%] z-20 '}
          onClick={() => {
            swiper.slideNext()
            testmonialActiveNo == 1 ? settestmonialActive(2) : settestmonialActive(1)
          }}
        />
      </div>
    </div>
  )
}

export default TestimonialSlider
