import { MapImg, MapMobImg } from '@/utils/assets'
import Image from 'next/image'

const Map = () => {
  return (
    <div className="p-5 pb-7 md:p-16 lg:p-20 lg:pt-28 2xl:px-40" id="map">
      <a
        href={'https://goo.gl/maps/hr8XLy4K4ejhGbKP6'}
        target="_blank"
        rel="noopener noreferrer"
        className=" h-min w-[70vw] overflow-hidden"
      >
        <Image
          src={MapImg}
          alt={'map'}
          width={1300}
          height={300}
          className={'hidden h-full w-full cursor-pointer duration-500 hover:scale-110 md:block'}
        />
      </a>
      <a href={'https://goo.gl/maps/hr8XLy4K4ejhGbKP6'} target="_blank" rel="noopener noreferrer">
        <Image src={MapMobImg} alt={'map'} width={1300} height={300} className={'h-full w-full md:hidden'} />
      </a>
    </div>
  )
}

export default Map
