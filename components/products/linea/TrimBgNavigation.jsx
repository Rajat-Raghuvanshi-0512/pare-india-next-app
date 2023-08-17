'use client'
import { useState } from 'react'
import { useSwiper } from 'swiper/react'

const TrimBgNavigation = ({ trims }) => {
  const swiper = useSwiper()
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div>
      <div className="z-20 mt-5 grid grid-cols-4 gap-5">
        {trims.map((trim, id) => (
          <div key={trim.fname + id}>
            <div
              className={`${
                currentIndex === id && 'border-2 border-white'
              } h-12 w-12 rounded-full bg-red-base md:h-14 md:w-14 lg:h-16 lg:w-16`}
              onClick={() => {
                setCurrentIndex(id)
                swiper.slideTo(id)
              }}
            ></div>
            <p className="pt-2 text-center text-xs md:text-sm">
              {trim.fname} <br /> {trim.lname}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrimBgNavigation
