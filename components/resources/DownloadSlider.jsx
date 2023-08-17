'use client'
import Image from 'next/image'

const DownloadSlider = ({ image, text, link }) => {
  return (
    <div className="download relative w-full duration-300" onClick={() => window.open(link)}>
      <Image src={image} alt={'resource'} className={'-z-10 w-full'} />
      <div className="bg-gradient absolute left-0 top-0 h-full w-full"></div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center px-5 font-metropolis font-bold text-white lg:text-4xl">
        <p className="relative w-fit">{text}</p>
      </div>
      <div className="btn absolute top-[70%] px-5 font-montserrat font-black text-red-base drop-shadow-sm">
        CLICK TO DOWNLOAD
      </div>
    </div>
  )
}

export default DownloadSlider
