'use client'
import { useState, useEffect } from 'react'
import { Button } from '../custom'
import Carousel from '../custom/Carousel'
import { useRouter } from 'next/navigation'

const PRCard = ({ id, heading, desc, img, img1, img2 }) => {
  const [counter, setCounter] = useState(0)
  const router = useRouter()

  const handleNext = () => {
    if (counter !== 2) {
      setCounter(counter + 1)
    } else {
      setCounter(0)
    }
  }
  useEffect(() => {
    let interval = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(interval)
  })
  return (
    <div
      className={`lg:gap:20 my-10 grid grid-cols-2 gap-3 md:gap-10 lg:gap-20 ${
        id === '02' || id === '04' ? 'mr-3 text-right md:mr-10 lg:mr-16 2xl:mr-40' : 'md:ml-10 lg:ml-16 2xl:ml-40'
      }`}
    >
      <div className={`ml-5 ${id === '02' || id === '04' ? 'order-3' : ''} `}>
        <div
          className={`relative flex items-start gap-1 font-metropolis md:gap-2 ${
            id === '02' || id === '04' ? 'justify-end' : ''
          }`}
        >
          <span
            className={` ${
              id !== '02' && id !== '04' ? 'absolute -left-4 md:-left-8 2xl:-left-12' : ''
            }  font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}
          >
            {id}
          </span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>{heading}</h3>
        </div>
        <p className="my-3 font-montserrat text-[10px] font-medium leading-3 md:text-sm lg:text-2xl 2xl:text-3xl">
          {desc}
        </p>
        <Button variant="outlined" className="md:my-5" onClick={() => router.push(`/product/${Number(id)}`)}>
          view products
        </Button>
      </div>
      <div className={`flex items-end ${id === '02' || id === '04' ? 'justify-start' : 'justify-end'}`}>
        <Carousel
          images={[img, img1, img2]}
          left={id === '02' || id === '04' ? false : true}
          alignLeft={id === '02' || id === '04' ? true : false}
        />
      </div>
    </div>
  )
}

export default PRCard
