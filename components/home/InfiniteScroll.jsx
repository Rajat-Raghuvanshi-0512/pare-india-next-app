'use client'
import { hyundai, minerva, ginger, regency, hyundaiphone, minervaphone, gingerphone, regencyphone } from '@/utils/assets'
import { useMediaQuery } from '../../utils/custom-hooks'
import Image from 'next/image'

const scrollData = [
  {
    image: hyundai,
  },
  {
    image: minerva,
  },
  {
    image: ginger,
  },
  {
    image: regency,
  },
  {
    image: hyundai,
  },
  {
    image: minerva,
  },
  {
    image: ginger,
  },
  {
    image: regency,
  },
]

const scrollDataPhone = [
  {
    image: hyundaiphone,
  },
  {
    image: minervaphone,
  },
  {
    image: gingerphone,
  },
  {
    image: regencyphone,
  },
  {
    image: hyundaiphone,
  },
  {
    image: minervaphone,
  },
  {
    image: gingerphone,
  },
  {
    image: regencyphone,
  },
]

const InfiniteScroll = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section>
      <div className="relative -bottom-5 ml-5 mt-5 flex font-montserrat font-bold uppercase md:bottom-0 md:ml-10 md:mt-10 lg:text-3xl">
        <span>Trusted by</span>
        <div className="relative  ml-2 mt-3 border-r border-t border-[#151515] p-5 md:bottom-0 md:-mb-7 md:mt-5 lg:p-8">
          <div className="absolute -bottom-1 -right-1 hidden h-1 rounded bg-[#151515] p-1 md:block"></div>
        </div>
      </div>
      <div className=" h-20 w-screen overflow-hidden bg-red-base md:h-28">
        <div className="animate-infinite bg-yellow-dark flex h-20 shadow-md md:h-28">
          <div className="flex items-center justify-center ">
            {isMobile
              ? scrollDataPhone.map((item, idx) => (
                  <div className="flex w-[150px] items-center md:w-[300px]" key={idx}>
                    <Image
                      loading="lazy"
                      src={item.image}
                      alt="logo"
                      className="h-20 w-full object-contain md:h-24 lg:h-28"
                    />
                  </div>
                ))
              : scrollData.map((item, idx) => (
                  <div className="flex w-[150px] items-center md:w-[300px]" key={idx}>
                    <Image
                      loading="lazy"
                      src={item.image}
                      alt="logo"
                      className="h-20 w-full object-contain md:h-24 lg:h-28"
                    />
                  </div>
                ))}
          </div>
          <div className="flex items-center justify-center ">
            {isMobile
              ? scrollDataPhone.map((item, idx) => (
                  <div className="flex w-[150px] items-center md:w-[300px]" key={idx}>
                    <Image
                      loading="lazy"
                      src={item.image}
                      alt="logo"
                      className="h-20 w-full object-contain md:h-24 lg:h-28"
                    />
                  </div>
                ))
              : scrollData.map((item, idx) => (
                  <div className="flex w-[150px] items-center md:w-[300px]" key={idx}>
                    <Image
                      loading="lazy"
                      src={item.image}
                      alt="logo"
                      className="h-20 w-full object-contain md:h-24 lg:h-28"
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfiniteScroll
