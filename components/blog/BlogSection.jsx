'use client'
import { NextArrowProject, PrevArrowProject } from '@/utils/assets'
import Image from 'next/image'
import BlogCard from './BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'
import 'swiper/css'
import { useState } from 'react'
import { blogData } from '../../utils/constants'

const BlogSm = ({ setActive }) => {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      slidesPerView={1.2}
      className="pl-14"
      initialSlide={1}
      allowTouchMove={true}
      onSlideChange={(swiper) => {
        setActive(swiper.activeIndex)
      }}
    >
      {blogData.map((item) => (
        <SwiperSlide key={item.id}>
          <BlogCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const BlogSection = () => {
  const [active, setActive] = useState(0)
  const [currPage, setCurrPage] = useState(1)
  const [items, setItems] = useState(blogData.slice(0, 16))
  const totalPageCount = Math.ceil(blogData.length / 16)

  const handlePrev = () => {
    if (currPage == 1) return
    setItems(() => blogData.slice(16 * (currPage - 2), 16 * (currPage - 1)))
    setCurrPage((prev) => prev - 1)
  }
  const handleNext = () => {
    if (currPage >= totalPageCount) return
    setItems(() => blogData.slice(16 * currPage, 16 * (currPage + 1)))
    setCurrPage((prev) => prev + 1)
  }
  return (
    <section className="bg-black-base p-5 pt-14 text-white md:p-10 lg:pt-20 2xl:px-40">
      <h2 className="m-5 font-metropolis text-5xl font-bold lg:text-6xl">Blog</h2>
      <div className="hidden gap-2 md:grid md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <BlogCard key={item.title} {...item} />
        ))}
      </div>
      <div className="md:hidden">
        <BlogSm setActive={setActive} />
        <div className="py-5 text-center font-metropolis text-xl font-light md:hidden">
          0{active}/{totalPageCount}
        </div>
      </div>
      <div className="z-20 mt-5 hidden h-20 items-center justify-between pb-5 md:flex md:pt-10">
        <div className="project-btn flex cursor-pointer items-center duration-200 hover:scale-125" onClick={handlePrev}>
          <div className="h-14 w-14 translate-x-[50%] rounded-full border"></div>
          <Image src={PrevArrowProject} alt={'prev'} width={80} height={80} className={' object-contain '} />
        </div>
        <div className="font-metropolis text-xl font-extralight md:text-2xl">
          0{currPage}/0{totalPageCount}
        </div>
        <div className="project-btn flex cursor-pointer items-center duration-200 hover:scale-125" onClick={handleNext}>
          <Image src={NextArrowProject} alt={'prev'} width={80} height={80} className={' object-contain '} />
          <div className="h-14 w-14 -translate-x-[50%] rounded-full border"></div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
