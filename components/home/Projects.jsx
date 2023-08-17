'use client'
import {
  PlayIcon,
  Project1Img,
  Project1PhoneImg,
  Project2Img,
  Project2PhoneImg,
  Project3Img,
  Project3PhoneImg,
  Project4Img,
  Project4PhoneImg,
  Project5Img,
  Project5PhoneImg,
} from '@/utils/assets'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'
import 'swiper/css'
import { useMediaQuery } from '../../utils/custom-hooks'
import { useEffect, useState } from 'react'
import SliderNavigation from './SliderNavigation'
import TestimonialSlider from './TestimonialSlider'

const projectImages = [
  { small: Project1PhoneImg, large: Project1Img },
  { small: Project2PhoneImg, large: Project2Img },
  { small: Project3PhoneImg, large: Project3Img },
  { small: Project4PhoneImg, large: Project4Img },
  { small: Project5PhoneImg, large: Project5Img },
]

const Projects = () => {
  const [loaded,setLoaded] = useState(false)
  const [testState, setTestState] = useState({
    test1: false,
    test2: false,
    test3: false,
  })
  const largeDevice = useMediaQuery('(min-width: 768px)')
  const [testmonialActiveNo, settestmonialActive] = useState(1)
  const [projectsActiveNo, setprojectsActiveNo] = useState(1)

  useEffect(()=>{
    setLoaded(true)
  },[])
  if(!loaded) return null
  return (
    <section className="p-5 md:p-10 lg:px-20 ">
      <div className="flex justify-between">
        <div className="font-metropolis">
          <div className="text-3xl font-bold uppercase md:text-4xl lg:text-5xl">Projects</div>
          <p className="mb-8 mt-3 text-sm md:mb-0 md:w-60 md:text-base lg:w-80">
            Browse through and see how we have transformed spaces and exceeded our client&apos;s expectations, one
            project at a time.
          </p>
        </div>
        <div className="hidden font-metropolis font-light md:block md:text-lg lg:text-xl">
          0{projectsActiveNo + 1}/03
        </div>
      </div>

      <hr className="hidden md:m-5 md:block lg:m-8" />
      <Swiper
        spaceBetween={50}
        slidesPerView={largeDevice ? 3 : 1}
        onSlideChange={(swiper) => {
          setprojectsActiveNo(swiper.realIndex + 1)
        }}
        loop={true}
        allowTouchMove={!largeDevice}
      >
        {projectImages.map((image, i) => (
          <SwiperSlide className="!flex !items-center !justify-center" key={image.small + i}>
            {largeDevice ? (
              <Image src={image.large} alt={'project'} width={300} height={300} className={' md:h-full md:w-full'} />
            ) : (
              <Image src={image.small} alt={'project'} width={300} height={300} className={' md:h-full md:w-full'} />
            )}
          </SwiperSlide>
        ))}

        <hr className="hidden md:m-5 md:block lg:m-8" />
        <SliderNavigation projectsActiveNo={projectsActiveNo} setprojectsActiveNo={setprojectsActiveNo} />
      </Swiper>
      <div className="mt-5 text-center font-metropolis font-light md:hidden">0{projectsActiveNo}/05</div>

      <div className="mt-10 flex flex-col justify-between gap-5 md:flex-row md:gap-10 lg:gap-20">
        <div className="flex-1 font-metropolis text-4xl !leading-snug lg:text-[3.4rem]">
          WHAT OUR <span className="font-bold text-red-base">CLIENTS</span> HAVE TO SAY ABOUT US
        </div>
        <div className="ml-28 mr-5 flex flex-1 items-end text-right font-helvetica text-sm md:mx-0 md:text-xl lg:text-4xl">
          Browse through our client testimonials to hear first-hand accounts of our quality products and exceptional
          customer service.
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSlideChange={(swiper) => {
            settestmonialActive(swiper.realIndex + 1)
          }}
        >
          <SwiperSlide onClick={() => setTestState((prev) => ({ test2: !prev.test2, test1: false, test3: false }))}>
            {testState.test2 === false && (
              <div className="absolute z-10 mx-auto my-5 mr-10 flex h-[200px] w-full items-center justify-center bg-black-base bg-opacity-30 text-white md:left-14 md:my-10 md:h-[400px] md:w-[90%] lg:h-[500px]">
                <Image src={PlayIcon} alt={'play'} className={'h-14 w-14 md:h-20 md:w-20'} loading="lazy" />
              </div>
            )}
            <ReactPlayer
              width="100%"
              height="500"
              url={'/assets/videos/testimonial2.mp4'}
              className="mx-auto my-5 h-[200px] md:my-10 md:h-[400px] lg:h-[500px]"
              title="test1"
              playing={testState.test2}
            />
          </SwiperSlide>
          <SwiperSlide onClick={() => setTestState((prev) => ({ test3: !prev.test3, test2: false, test1: false }))}>
            {testState.test3 === false && (
              <div className="absolute z-10  mx-auto my-5 flex h-[200px] w-full items-center justify-center bg-black-base bg-opacity-30 text-white md:left-14 md:my-10 md:h-[400px] md:w-[90%] lg:h-[500px]">
                <Image src={PlayIcon} alt={'play'} className={'h-14 w-14 md:h-20 md:w-20'} loading="lazy" />
              </div>
            )}
            <ReactPlayer
              width="100%"
              height="500"
              url={'/assets/videos/testimonial3.mp4'}
              className="mx-auto my-5 h-[200px] md:my-10 md:h-[400px] lg:h-[500px]"
              title="test2"
              playing={testState.test3}
            />
          </SwiperSlide>
          <TestimonialSlider testmonialActiveNo={testmonialActiveNo} settestmonialActive={settestmonialActive} />
        </Swiper>
      </div>
    </section>
  )
}

export default Projects
