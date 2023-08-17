'use client'
import { useState, useEffect } from 'react'
import {
  BigImg1,
  BigImg2,
  BigImg3,
  BigPhoneImg1,
  BigPhoneImg2,
  BigPhoneImg3,
  HorizontalImg1,
  HorizontalImg2,
  HorizontalImg3,
  HorizontalImg4,
  SmallImg1,
  SmallImg2,
  SmallImg3,
  SmallImg4,
  SmallImg5,
  SmallImg6,
  SmallImg7,
  SmallImg8,
  VerticalImg1,
  VerticalImg2,
  VerticalImg3,
  VerticalImg4,
} from '@/utils/assets'
import { useMediaQuery } from '../../utils/custom-hooks'
import { Button } from '../custom'
import Image from 'next/image'

const GalleryData = [
  {
    collection: {
      verticalImg: VerticalImg1,
      horizontalImg: HorizontalImg1,
      images: [SmallImg1, SmallImg2],
    },
    bigImage: {
      phoneImg: BigPhoneImg1,
      webImg: BigImg1,
    },
  },
  {
    collection: {
      verticalImg: VerticalImg2,
      horizontalImg: HorizontalImg2,
      images: [SmallImg3, SmallImg4],
      order: 'second',
    },
    bigImage: {
      phoneImg: BigPhoneImg2,
      webImg: BigImg2,
    },
  },
  {
    collection: {
      verticalImg: VerticalImg3,
      horizontalImg: HorizontalImg3,
      images: [SmallImg5, SmallImg6],
      order: 'third',
    },
    bigImage: {
      phoneImg: BigPhoneImg3,
      webImg: BigImg3,
    },
  },
  {
    collection: {
      verticalImg: VerticalImg4,
      horizontalImg: HorizontalImg4,
      images: [SmallImg7, SmallImg8],
    },
  },
  {
    collection: {
      verticalImg: VerticalImg1,
      horizontalImg: HorizontalImg1,
      images: [SmallImg1, SmallImg2],
    },
    bigImage: {
      phoneImg: BigPhoneImg1,
      webImg: BigImg1,
    },
  },
  {
    collection: {
      verticalImg: VerticalImg2,
      horizontalImg: HorizontalImg2,
      images: [SmallImg3, SmallImg4],
      order: 'second',
    },
    bigImage: {
      phoneImg: BigPhoneImg2,
      webImg: BigImg2,
    },
  },
  {
    collection: {
      verticalImg: VerticalImg3,
      horizontalImg: HorizontalImg3,
      images: [SmallImg5, SmallImg6],
      order: 'third',
    },
    bigImage: {
      phoneImg: BigPhoneImg3,
      webImg: BigImg3,
    },
  },
]

const Collection = ({ verticalImg, horizontalImg, images = [], order = 'normal' }) => {
  return (
    <>
      <div className="flex h-full w-full gap-3 py-4 md:gap-5 md:pb-10">
        <div className={`flex-[1.3] md:flex-[0.7] ${order != 'normal' && 'order-2'} `}>
          <Image src={verticalImg} alt="verticalimg" className="h-full w-full object-cover" />
        </div>
        <div className="flex-[0.7] md:flex-[1.3]">
          <div className="flex h-full w-full flex-col md:h-auto md:gap-5">
            <div className={`flex h-full w-full flex-col gap-3 md:flex-row md:gap-0 ${order == 'second' && 'order-2'}`}>
              {images.map((image, i) => (
                <Image
                  src={image}
                  alt="imaz"
                  key={image + i}
                  className="w-full object-cover first:h-[55%] last:h-[45%] md:h-full md:w-[50%] md:first:h-full md:first:pr-3 md:last:h-full md:last:pl-3"
                />
              ))}
            </div>
            <div className="hidden md:block">
              <Image src={horizontalImg} alt="horizontalimg" className=" w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
      <Image src={horizontalImg} alt="horizontalimg" className=" w-full object-contain pt-3 md:hidden" />
    </>
  )
}

const BigImage = ({ imageSrc }) => {
  return <Image src={imageSrc} alt="ima" className="h-full w-full object-cover py-4 md:pb-10" />
}

const GallerySection = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [itemsCount, setItemsCount] = useState(4)
  const loadMore = () => {
    if (itemsCount < GalleryData.length) {
      setItemsCount((prev) => (prev += 1))
    }
    setLoading(true)
    setLoading(false)
  }
  useEffect(() => {
    setData(GalleryData.slice(0, itemsCount))
  }, [itemsCount])
  const isPhone = useMediaQuery('(max-width: 768px)')
  return (
    <div className="p-5 pt-10 md:p-10">
      {data.map((item) => (
        <>
          {item?.collection && (
            <Collection
              verticalImg={item.collection.verticalImg}
              horizontalImg={item.collection.horizontalImg}
              images={item.collection.images}
              order={item.collection.order ? item.collection.order : 'normal'}
            />
          )}
          {item?.bigImage && <BigImage imageSrc={isPhone ? item.bigImage.phoneImg : item.bigImage.webImg} />}
        </>
      ))}
      <div className="flex justify-end py-5">
        {data.length !== GalleryData.length && (
          <Button onClick={loadMore}>{loading ? 'Loading...' : 'Load more'}</Button>
        )}
      </div>
    </div>
  )
}

export default GallerySection
