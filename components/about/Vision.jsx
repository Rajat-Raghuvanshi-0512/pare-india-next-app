import { ginger, hyundai, minerva, regency } from '@/utils/assets'
import Image from 'next/image'

const clients = [hyundai, minerva, ginger, regency]

const Vision = () => {
  return (
    <section className=" bg-red-base p-5 md:p-10 lg:px-16 lg:pb-0 lg:pt-10">
      <div className="flex gap-5 md:gap-10 lg:gap-16">
        <div className="hidden flex-[0.7] md:block"></div>
        <div className="mt-5 flex-[1.3] text-center font-metropolis text-white md:mt-0 md:text-left md:text-xl lg:text-3xl">
          <span className="text-3xl font-medium md:text-4xl lg:text-5xl">Our Vision,</span> is to revolutionize the
          world of surfaces by bringing innovative, cutting-edge, sustainable and functional solutions to the market.
        </div>
      </div>
      <div className="hidden md:block">
        <h6 className="pb-3 pl-5 pt-5 font-metropolis text-2xl font-medium text-white lg:pt-14 2xl:pl-32">
          Our clients include
        </h6>
        <div className="flex justify-between gap-10 px-20 lg:-mt-6 2xl:px-48">
          {clients.map((client, idx) => {
            return (
              <div key={client + idx}>
                <Image
                  src={client}
                  alt={'client' + idx + 1}
                  width={160}
                  height={160}
                  className={'w-[100px] lg:w-[160px] 2xl:h-[200px] 2xl:w-[200px]'}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="mx-5 my-7 flex flex-col items-center justify-center md:hidden">
        <Image src={hyundai} alt={'godrej'} width={140} />
        <Image src={minerva} alt={'godrej'} width={140} />
        <Image src={ginger} alt={'godrej'} width={140} />
        <Image src={regency} alt={'godrej'} width={140} />
      </div>
    </section>
  )
}

export default Vision
