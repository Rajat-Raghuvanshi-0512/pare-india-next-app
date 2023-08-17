'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { InstaImg1, InstaImg2, InstaImg3, InstaImg4, InstaImg5, InstaImg6, InstaImg7, InstaImg8 } from '@/utils/assets'
import Image from 'next/image'

const tempImg = [InstaImg8, InstaImg2, InstaImg1, InstaImg4, InstaImg7, InstaImg5, InstaImg6, InstaImg3]

const PareIndiaRotatingImgSm = ({ images }) => {
  return (
    <section className="relative flex h-[33rem] w-screen flex-col items-center justify-start overflow-hidden">
      <div className="absolute left-[50%] top-[37%] -translate-x-[50%] text-center">
        <h1 className="font-metropolis text-4xl font-bold">@pare.india</h1>
        <p className="py-2 text-center font-helvetica text-xs  opacity-60 md:text-base lg:text-lg">
          Follow @pare.india on Instagram to see our latest innovative designs and get inspired for your next project!
        </p>
      </div>
      <div className="circle-container z-30 flex h-screen flex-col items-center justify-center">
        {images
          ? images?.slice(0, 8)?.map((im, idx) => {
              return (
                <Image src={im.media_url} key={im.media_url + idx} id="instafeed" alt={'Instaphotos'} loading="lazy" />
              )
            })
          : tempImg.map((img) => <Image src={img} key={img} id="instafeed" alt={'Instaphotos'} loading="lazy" />)}
      </div>
    </section>
  )
}
const PareIndiaRotatingImgLg = ({ images }) => {
  const ref = useRef()

  const getScrollOffset = (e) => {
    let xValue = e.clientX
    let yValue = e.clientY
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth

    let mousePosX = -1 + (xValue / windowWidth) * 200
    let mousePosY = 1 - (yValue / windowHeight) * 100
    ref.current.style.transform = `translate3d(${-mousePosX + 100}px,${mousePosY + 100}px,0px)`
    ref.current.style.transition = ' all 0.4s'
  }
  return (
    <section className="relative flex w-screen flex-col items-center justify-center overflow-hidden md:-mt-10 md:h-[60rem]">
      <div className="absolute left-[50%] top-[47%] w-[40%] -translate-x-[50%] text-center">
        <h1 className="font-metropolis text-2xl font-black md:text-4xl lg:text-7xl">@pare.india</h1>
        <p className="py-2 text-center font-helvetica text-sm opacity-60 md:text-base lg:text-lg">
          Follow @pare.india on Instagram to see our latest innovative designs and get inspired for your next project!
        </p>
      </div>
      <div
        className="circle-container z-30 flex h-screen flex-col items-center justify-center"
        ref={ref}
        onMouseMove={getScrollOffset}
      >
        {images
          ? images?.slice(0, 8)?.map((im, idx) => {
              return (
                <Image src={im.media_url} key={im.media_url + idx} id="instafeed" alt={'Instaphotos'} loading="lazy" />
              )
            })
          : tempImg.map((img) => <Image src={img} key={img} id="instafeed" alt={'Instaphotos'} loading="lazy" />)}
      </div>
    </section>
  )
}

const PareIndiaRotatingImg = () => {
  const access_token = process.env.VITE_INSTA_API_KEY

  const [images, setImages] = useState([])

  const getPosts = useCallback(async () => {
    const res = await fetch(`https://graph.instagram.com/me/media?access_token=${access_token}`)
    const data = await res.json()
    const finalData = data.data
    if (!finalData) {
      return setImages(null)
    }
    for (let i = 0; i < finalData.length; i++) {
      let postId
      postId = finalData[i].id
      const res = await fetch(
        `https://graph.instagram.com/${postId}?access_token=${access_token}&fields=media_url,permalink,media_type`,
      )
      const data = await res.json()
      console.log(data)

      if (data.media_type == 'IMAGE') {
        setImages((prev) => [...prev, data])
      }
    }
  }, [access_token])
  useEffect(() => {
    getPosts()
  }, [getPosts])
  return (
    <div>
      <div className="md:hidden">
        <PareIndiaRotatingImgSm images={images} />
      </div>
      <div className="hidden md:block">
        <PareIndiaRotatingImgLg images={images} />
      </div>
    </div>
  )
}

export default PareIndiaRotatingImg
