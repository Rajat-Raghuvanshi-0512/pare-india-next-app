'use client'
import { useSwiper } from 'swiper/react'
import { LeftArrowMobile, RightArrowMobile, NextArrowProject, PrevArrowProject } from '@/utils/assets'
import Image from 'next/image'
import { useMediaQuery } from '../../utils/custom-hooks'

const SliderNavigation = ({ projectsActiveNo, setprojectsActiveNo }) => {
  const swiper = useSwiper()
  const isMobile = useMediaQuery('(max-width: 500px)')
  const handlePrev = () => {
    if (isMobile) {
      swiper.slidePrev()
    } else {
      swiper.slideTo(projectsActiveNo === 0 ? 2 : projectsActiveNo - 1)
      setprojectsActiveNo(projectsActiveNo === 0 ? 2 : projectsActiveNo - 1)
    }
  }
  const handleNext = () => {
    if (isMobile) {
      swiper.slideNext()
    } else {
      swiper.slideTo(projectsActiveNo === 2 ? 0 : projectsActiveNo + 1)
      setprojectsActiveNo(projectsActiveNo === 2 ? 0 : projectsActiveNo + 1)
    }
  }
  return (
    <div>
      <div className="md:hidden">
        <Image
          src={LeftArrowMobile}
          alt={'prev'}
          width={20}
          height={20}
          className={'absolute left-0 top-[45%] z-20'}
          onClick={() => swiper.slidePrev()}
        />
        <Image
          src={RightArrowMobile}
          alt={'prev'}
          width={20}
          height={20}
          className={'absolute right-0 top-[45%] z-20 '}
          onClick={() => swiper.slideNext()}
        />
      </div>
      <div className="z-20 hidden h-20 items-center justify-between py-5 md:flex">
        <div className="project-btn flex cursor-pointer items-center duration-200 hover:scale-125" onClick={handlePrev}>
          <div className="h-14 w-14 translate-x-[50%] rounded-full border"></div>
          <Image src={PrevArrowProject} alt={'prev'} width={80} height={80} className={' object-contain '} />
        </div>
        <div className="project-btn flex cursor-pointer items-center duration-200 hover:scale-125" onClick={handleNext}>
          <Image src={NextArrowProject} alt={'prev'} width={80} height={80} className={' object-contain '} />
          <div className="h-14 w-14 -translate-x-[50%] rounded-full border"></div>
        </div>
      </div>
    </div>
  )
}

export default SliderNavigation
