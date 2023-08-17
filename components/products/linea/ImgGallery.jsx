import Image from 'next/image'

const ImgGallerySm = ({ img1, img2, img3, img4 }) => {
  return (
    <>
      <div className="flex">
        <div className="flex-[0.7]">
          <Image src={img1} height={500} alt={'img1'} className={'h-full w-full'} />
        </div>
        <div className="flex-[1.3]">
          <Image src={img2} height={500} alt={'img2'} className={'h-full w-full'} />
        </div>
      </div>
      <div className="flex">
        <div className="flex-[1.3]">
          <Image src={img3} height={500} alt={'img3'} className={'h-full w-full'} />
        </div>
        <div className="flex-[0.7]">
          <Image src={img4} height={500} alt={'img4'} className={'h-full w-full'} />
        </div>
      </div>
    </>
  )
}
const ImgGalleryLg = ({ img1, img2, img3, img4 }) => {
  return (
    <div className="grid grid-cols-4 md:h-screen">
      <div>
        <Image src={img1} height={500} alt={'img1'} className={'h-full w-full'} />
      </div>
      <div>
        <Image src={img2} height={500} alt={'img2'} className={'h-[50%] w-full'} />
        <Image src={img3} height={500} alt={'img3'} className={'h-[50%] w-full'} />
      </div>
      <div className="col-span-2">
        <Image src={img4} height={500} alt={'img4'} className={'h-full w-full'} />
      </div>
    </div>
  )
}

const ImgGallery = ({ img1, img2, img3, img4 }) => {
  return (
    <>
      <div className="md:hidden">
        <ImgGallerySm img1={img1} img2={img2} img3={img3} img4={img4} />
      </div>
      <div className="hidden md:block">
        <ImgGalleryLg img1={img1} img2={img2} img3={img3} img4={img4} />
      </div>
    </>
  )
}

export default ImgGallery
