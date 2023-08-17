import Image from 'next/image'
import { useEffect, useState } from 'react'

const Carousel = ({ images = [], left = false, alignLeft = false }) => {
  const [activeImg, setactiveImg] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      if (activeImg >= 2) {
        setactiveImg(0)
      } else {
        setactiveImg(activeImg + 1)
      }
    }, 3000)
  }, [activeImg])
  return (
    <div id="default-carousel" className="relative z-[1] h-[90%] w-[90%]  md:h-full md:w-full">
      <div className="relative h-full overflow-hidden">
        {images.map((image, i) => (
          <div
            className={`absolute inset-0 -z-50 transform transition-all duration-700  ease-in-out  ${
              i <= activeImg ? 'translate-x-0' : left ? 'translate-x-full' : '-translate-x-full'
            }`}
            key={i}
          >
            <Image
              src={image}
              className={`object-r absolute left-1/2 top-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover 2xl:object-contain ${
                alignLeft ? 'object-left' : 'object-right'
              } `}
              alt="carousel"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
