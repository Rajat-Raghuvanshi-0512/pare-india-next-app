import { CareerImg1, CareerImg2, CareerImg3, CareerImg4, CareerImg5 } from '@/utils/assets'
import Image from 'next/image'

const CareerSection3 = () => {
  return (
    <section className="p-5 md:p-10 lg:px-20">
      <div className="mt-10 grid grid-cols-3 gap-2 md:gap-5 lg:mt-20">
        <div className="col-span-2">
          <Image src={CareerImg1} alt={'img1'} className="h-full w-full" />
        </div>
        <div>
          <Image src={CareerImg2} alt={'img2'} className="h-full w-full" />
        </div>
        <div>
          <Image src={CareerImg3} alt={'img3'} className="h-full w-full" />
        </div>
        <div>
          <Image src={CareerImg4} alt={'img4'} className="h-full w-full" />
        </div>
        <div>
          <Image src={CareerImg5} alt={'img5'} className="h-full w-full" />
        </div>
      </div>
    </section>
  )
}

export default CareerSection3
