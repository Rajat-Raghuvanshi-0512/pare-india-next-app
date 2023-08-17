'use client'
import { Feather, PenTool, Star, SunLoader } from '@/utils/assets'
import { useMediaQuery } from '../../utils/custom-hooks'
import Image from 'next/image'

const elemData = [
  {
    image: Feather,
    heading: 'Sustainability',
    desc: 'We believe in preserving our planet for future generations, which is why we use environmentally-friendly materials and sustainable practices in all our manufacturing processes.',
    descMobile: 'Our customers can trust us to deliver on our promises and stand behind our products.',
  },
  {
    image: SunLoader,
    heading: 'Integrity',
    desc: 'We believe in doing the right thing, even when no one is watching. We take responsibility for our actions and are accountable to our stakeholders.',
    descMobile: 'Our customers can trust us to deliver on our promises and stand behind our products.',
  },
  {
    image: PenTool,
    heading: 'Innovation',
    desc: 'Our customers can trust us to deliver on our promises and stand behind our products. Experience the PARÉ Innovations difference with our unwavering commitment to integrity.',
    descMobile: 'Our customers can trust us to deliver on our promises and stand behind our products.',
  },
  {
    image: Star,
    heading: 'Quality',
    desc: 'Our team of designers, engineers, and craftsmen work collaboratively to create products that not only look great but also exceed expectations.',
    descMobile: 'Our customers can trust us to deliver on our promises and stand behind our products.',
  },
]

const Element = ({ image, heading, descMobile, desc }) => {
  const isMobile = useMediaQuery('(max-width:768px)')
  return (
    <div className="mx-auto flex w-32 flex-col items-center gap-3 font-metropolis text-white md:w-full md:p-0">
      <div className="h-24 w-24 rounded-full border border-white p-5 md:border-2 md:p-4">
        <Image src={image} alt="quality" className="h-full w-full object-contain" loading="lazy" />
      </div>
      <h3 className="text-xl font-semibold uppercase md:font-normal">{heading}</h3>
      <p className="text-center text-xs font-light">{isMobile ? descMobile : desc}</p>
    </div>
  )
}

const Qualities = () => {
  return (
    <div>
      <div className="relative -bottom-7 ml-5 mt-5 flex font-montserrat font-bold uppercase md:bottom-0 md:ml-10 md:mt-10 lg:text-3xl">
        <span>Our Qualities</span>
        <div className="relative  ml-2 mt-3 border-r border-t border-[#151515] p-5 md:bottom-0 md:-mb-7 md:mt-5 lg:p-8">
          <div className="absolute -bottom-1 -right-1 hidden h-1 rounded bg-[#151515] p-1 md:block"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 bg-red-base p-5 px-10 md:flex md:flex-nowrap md:gap-10 md:p-10 md:pt-20 lg:gap-20 lg:px-20  2xl:scale-110 2xl:px-60">
        {elemData.map((element) => {
          return <Element key={element.heading} {...element} />
        })}
      </div>
    </div>
  )
}

export default Qualities
