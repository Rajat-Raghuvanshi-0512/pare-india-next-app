'use client'
import {
  P1,
  P12,
  P13,
  P2,
  P21,
  P22,
  P3,
  P31,
  P32,
  PareText,
  P1Phone,
  P12Phone,
  P13Phone,
  P2Phone,
  P21Phone,
  P22Phone,
  P3Phone,
  P31Phone,
  P32Phone,
  P41,
  P4,
  P42,
} from '@/utils/assets'
import { useMediaQuery } from '../../utils/custom-hooks'
import Image from 'next/image'
import PRCard from './PRCard'

const mainData = [
  {
    id: '01',
    heading: 'Innov+',
    desc: 'Discover the World of INNOV+, where innovative interior design meets convenience and style. Our products feature a unique tongue and groove interlocking system, ensuring easy installation and a seamless, polished finish. Embrace the versatility of INNOV+ and bring your dream interiors to life, where form and function coalesce effortlessly.',
  },
  {
    id: '02',
    heading: 'Easy+',
    desc: 'Welcome to the world of Easy+, where simplicity meets elegance in interior design. Embrace the convenience of our revolutionary Easy+ system, designed to make your interior installations a breeze. With its user-friendly features and versatile applications, Easy+ transforms the mundane task of installing interior elements into an enjoyable experience, enabling you to create stunning spaces effortlessly.',
  },
  {
    id: '03',
    heading: 'Dura+',
    desc: "Dura+ is the epitome of strength and durability for your exterior facade needs. With its robust construction and weather-resistant properties, Dura+ offers long-lasting protection and stunning aesthetics. Stand strong against the elements while enhancing the architectural beauty of your building. Whether it's a residential or commercial projects.",
  },
  {
    id: '04',
    heading: 'Innov2+',
    desc: "We're thrilled to unveil our latest breakthrough in interior design - Innov2+ Wall & Ceiling Panels! With an unmatched blend of innovation and excellence, Innov2+ is here to transform your spaces into a realm of contemporary elegance and cutting-edge functionality.",
  },
]

const ProductsData = [
  {
    img: P1,
    img1: P12,
    img2: P13,
    ...mainData[0],
  },
  {
    img: P2,
    img1: P21,
    img2: P22,
    ...mainData[1],
  },
  {
    img: P3,
    img1: P31,
    img2: P32,
    ...mainData[2],
  },
  {
    img: P4,
    img1: P41,
    img2: P42,
    ...mainData[3],
  },
]

const ProductsDataPhone = [
  {
    img: P1Phone,
    img1: P12Phone,
    img2: P13Phone,
    ...mainData[0],
  },
  {
    img: P2Phone,
    img1: P21Phone,
    img2: P22Phone,
    ...mainData[1],
  },
  {
    img: P3Phone,
    img1: P31Phone,
    img2: P32Phone,
    ...mainData[2],
  },
  {
    img: P4,
    img1: P41,
    img2: P42,
    ...mainData[3],
  },
]

const ProductsRange = () => {
  const isMobile = useMediaQuery('(max-width:768px)')
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h2 className="m-10  border-b-2 border-b-red-base text-center font-montserrat text-3xl font-bold uppercase lg:my-24 lg:text-4xl xl:text-5xl">
          Products Range
        </h2>
      </div>
      <div className="relative">
        <Image
          src={PareText}
          alt="pare"
          width={250}
          height={800}
          className="absolute -top-10 left-2 -z-10 hidden object-contain md:block lg:-top-28"
          loading="lazy"
        />
        {isMobile
          ? ProductsDataPhone.map((product) => (
              <div key={product.id}>
                <PRCard {...product} />
              </div>
            ))
          : ProductsData.map((product) => (
              <div key={product.id}>
                <PRCard {...product} />
              </div>
            ))}
      </div>
    </div>
  )
}

export default ProductsRange
