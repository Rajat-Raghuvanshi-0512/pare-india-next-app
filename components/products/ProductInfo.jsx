'use client'
import {
  Globe,
  PareText,
  ProductImg1,
  ProductImg2,
  ProductImg3,
  ProductImg4,
  ProductImg5,
  ProductImg6,
  ProductImg7,
  ProductImg8,
  Wall,
} from '@/utils/assets'
import { Button } from '../custom'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const ProductInfoSm = () => {
  const router = useRouter()
  return (
    <section className="relative">
      <Image
        src={PareText}
        alt="pare"
        width={250}
        height={800}
        className="absolute left-2 top-0 -z-10 h-full w-[200px] object-contain object-top"
      />
      <div className="pb-10">
        <div>
          <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
            <span className={`pl-1 font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>01</span>
            <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>innov+</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" flex-[1.2]">
            <div className="relative">
              <div className="absolute -top-2 left-2 -z-50 h-full w-full  border-2 border-red-base"></div>
              <Image
                src={ProductImg1}
                width={550}
                height={415}
                alt="sofa"
                className=" mt-3 h-full w-full object-contain lg:mt-5"
              />
            </div>
            <div className=" mt-5 flex justify-end font-montserrat text-[8px] font-medium">
              <div className="flex gap-2 border-r-2 px-2 pr-4">
                <Image src={Globe} alt={'medal'} width={15} height={25} className={'object-contain'} />
                <p>First time in India</p>
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <Image src={Wall} alt={'wall'} width={25} height={25} className={'object-contain'} />
                <p>Usage: Walls and Ceilings</p>
              </div>
            </div>
          </div>
          <div className="flex-[0.8] pr-3">
            <p className="mt-5 text-right font-montserrat text-xs font-medium">
              Elevate your space with PARÉ&apos;s wood-inspired
              <span className="font-bold text-red-base"> first-time-in-India</span> Soffit Systems, transforming
              effortlessly with our versatile Louvers and sleek Vertica Panels for
              <span className="font-bold text-red-base"> walls and ceilings.</span>
            </p>
            <div className="mt-3 flex justify-end">
              {' '}
              <Button variant="outlined" className={'!border !text-[10px]'} onClick={() => router.push('/product/1')}>
                view products
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <div>
          <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
            <span className={`pl-1 font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>02</span>
            <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>easy+</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" flex-[1.2]">
            <div className="relative">
              <div className="absolute -top-2 left-2 -z-50 h-full w-full  border-2 border-red-base"></div>
              <Image
                src={ProductImg3}
                width={550}
                height={415}
                alt="sofa"
                className=" mt-3 h-full w-full object-contain lg:mt-5"
              />
            </div>
            <div className=" mt-5 flex justify-end font-montserrat text-[8px] font-medium">
              <div className="flex gap-2 border-r-2 px-2 pr-4">
                <Image src={Globe} alt={'medal'} width={15} height={25} className={'object-contain'} />
                <p>First time in the World</p>
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <Image src={Wall} alt={'wall'} width={25} height={25} className={'object-contain'} />
                <p>Usage: Walls and Ceilings</p>
              </div>
            </div>
          </div>
          <div className="flex-[0.8] pr-3">
            <p className="mt-5 text-right font-montserrat text-xs font-medium">
              Revolutionize your space with PARÉ&apos;s Easy+ Locking System{' '}
              <span className="font-bold text-red-base">- Seamless installation,</span> versatile Pyramid design, and
              Linea panels offer effortless flexibility, all with
              <span className="font-bold text-red-base">world-first, quick and dust-free installation.</span>
            </p>
            <div className="mt-3 flex justify-end">
              {' '}
              <Button variant="outlined" className={'!border !text-[10px]'} onClick={() => router.push('/product/2')}>
                view products
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <div>
          <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
            <span className={`pl-1 font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>03</span>
            <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>dura+</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" flex-[1.2]">
            <div className="relative">
              <div className="absolute -top-2 left-2 -z-50 h-full w-full  border-2 border-red-base"></div>
              <Image
                src={ProductImg5}
                width={550}
                height={415}
                alt="sofa"
                className=" mt-3 h-full w-full object-contain lg:mt-5"
              />
            </div>
            <div className=" mt-5 flex justify-end font-montserrat text-[8px] font-medium">
              <div className="flex gap-2 border-r-2 px-2 pr-4">
                <Image src={Globe} alt={'shield'} width={15} height={25} className={'object-contain'} />
                <p>First time in India</p>
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <Image src={Wall} alt={'wall'} width={25} height={25} className={'object-contain'} />
                <p>Usage: Exterior Facade Surface</p>
              </div>
            </div>
          </div>
          <div className="flex-[0.8] pr-3">
            <p className="mt-5 text-right font-montserrat text-xs font-medium">
              PARÉ DURA+ Systems redefine durability and functionality, offering excellence in{' '}
              <span className="font-bold text-red-base">exteriors</span> and wall cladding with{' '}
              <span className="font-bold text-red-base">long-lasting facades and high-impact resistance.</span>
            </p>
            <div className="mt-3 flex justify-end">
              {' '}
              <Button variant="outlined" className={'!border !text-[10px]'} onClick={() => router.push('/product/3')}>
                view products
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <div>
          <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
            <span className={`pl-1 font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>04</span>
            <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>innov2+</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" flex-[1.2]">
            <div className="relative">
              <div className="absolute -top-2 left-2 -z-50 h-full w-full  border-2 border-red-base"></div>
              <Image
                src={ProductImg6}
                width={550}
                height={415}
                alt="sofa"
                className=" mt-3 h-full w-full object-contain lg:mt-5"
              />
            </div>
            <div className=" mt-5 flex justify-end font-montserrat text-[8px] font-medium">
              <div className="flex gap-2 border-r-2 px-2 pr-4">
                <Image src={Globe} alt={'shield'} width={15} height={25} className={'object-contain'} />
                <p>First time in the world</p>
              </div>
              <div className="flex gap-2 px-2 pl-4">
                <Image src={Wall} alt={'wall'} width={25} height={25} className={'object-contain'} />
                <p>Usage: Exterior Surface</p>
              </div>
            </div>
          </div>
          <div className="flex-[0.8] pr-3">
            <p className="mt-5 text-right font-montserrat text-xs font-medium">
              Presenting Innov2+, an extraordinary fusion of innovation and excellence, poised to revolutionize your
              spaces with contemporary elegance and state-of-the-art functionality.
            </p>
            <div className="mt-3 flex justify-end">
              {' '}
              <Button variant="outlined" className={'!border !text-[10px]'} onClick={() => router.push('/product/4')}>
                view products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const ProductInfoLg = () => {
  const router = useRouter()
  return (
    <section className="relative">
      <Image
        src={PareText}
        alt="pare"
        width={250}
        height={800}
        className="absolute left-2 top-0 -z-10 hidden h-full object-contain object-top md:block md:w-[400px] lg:left-20 lg:top-32 lg:w-[500px]"
      />
      <div className="p-5  pt-20 md:p-16 lg:px-28 2xl:px-40">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`pl-1 font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>01</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>innov+</h3>
        </div>
        <div className=" grid grid-cols-2 pb-20">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-[80%] w-full  border-2 border-red-base"></div>
            <Image
              src={ProductImg1}
              width={550}
              height={415}
              alt="sofa"
              className=" mt-3 h-[80%] w-full object-cover  lg:mt-5"
            />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium md:text-sm lg:text-[15px] 2xl:text-xl">
                Elevate your space with PARÉ&apos;s wood-inspired
                <span className="font-bold text-red-base"> first-time-in-India</span> Soffit Systems, transforming
                effortlessly with our versatile Louvers and sleek Vertica Panels for
                <span className="font-bold text-red-base"> walls and ceilings.</span>
              </p>
              <div className="mt-2 flex items-end justify-end">
                <Button onClick={() => router.push('/product/1')}>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium md:text-sm lg:text-base 2xl:text-2xl">
              <div className="flex gap-5 border-r px-2 pr-4">
                <Image src={Globe} alt={'medal'} width={30} height={45} className={'object-contain'} />
                <p>First time in India</p>
              </div>
              <div className="flex gap-5 px-2 pl-4">
                <Image src={Wall} alt={'wall'} width={50} height={45} className={'object-contain'} />
                <p>Usage: Walls and Ceilings</p>
              </div>
            </div>
            <div className="ml-6 mt-3 h-full w-full border-2 border-red-base">
              <Image
                src={ProductImg2}
                width={550}
                height={415}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-full w-full object-cover lg:-ml-4  lg:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5  pt-20 md:p-16 md:py-40 lg:p-20 lg:px-28 2xl:px-40 2xl:py-60">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`pl-1 font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>02</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>easy+</h3>
        </div>
        <div className=" grid grid-cols-2 pb-20">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-[80%] w-full  border-2 border-red-base"></div>
            <Image
              src={ProductImg3}
              width={550}
              height={415}
              alt="sofa"
              className=" mt-3 h-[80%] w-full object-cover lg:mt-5"
            />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium md:text-sm lg:text-[15px] 2xl:text-xl">
                Revolutionize your space with PARÉ&apos;s Easy+ Locking System{' '}
                <span className="font-bold text-red-base">- Seamless installation,</span> versatile Pyramid design, and
                Linea panels offer effortless flexibility, all with
                <span className="font-bold text-red-base"> world-first, quick and dust-free installation.</span>
              </p>
              <div className="mt-2 flex items-end justify-end">
                <Button onClick={() => router.push('/product/2')}>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium md:text-sm lg:text-base 2xl:text-2xl">
              <div className="flex gap-5 border-r px-2 pr-4">
                <Image src={Globe} alt={'medal'} width={30} height={45} className={'object-contain'} />
                <p>First time in the World</p>
              </div>
              <div className="flex gap-5 px-2 pl-4">
                <Image src={Wall} alt={'wall'} width={50} height={45} className={'object-contain'} />
                <p>Usage: Walls and Ceilings</p>
              </div>
            </div>
            <div className="ml-6 mt-3 h-full w-full border-2 border-red-base">
              <Image
                src={ProductImg4}
                width={550}
                height={415}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-full w-full object-cover lg:-ml-4  lg:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5  pt-20 md:p-16 lg:px-28 2xl:px-40 2xl:pb-60">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`pl-1 font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>03</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>dura+</h3>
        </div>
        <div className=" grid grid-cols-2 pb-20 md:pb-40 lg:pb-20">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-[80%] w-full  border-2 border-red-base"></div>
            <Image
              src={ProductImg5}
              width={550}
              height={415}
              alt="sofa"
              className=" mt-3 h-[80%] w-full object-cover  lg:mt-5"
            />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium md:text-sm lg:text-[15px] 2xl:text-xl">
                PARÉ DURA+ Systems redefine durability and functionality, offering excellence in{' '}
                <span className="font-bold text-red-base">exteriors</span> and wall cladding with{' '}
                <span className="font-bold text-red-base">long-lasting facades and high-impact resistance.</span>
              </p>
              <div className="mt-2 flex items-end justify-end">
                <Button onClick={() => router.push('/product/3')}>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium md:text-sm lg:text-base 2xl:text-2xl">
              <div className="flex gap-5 border-r px-2 pr-4">
                <Image src={Globe} alt={'shield'} width={30} height={45} className={'object-contain'} />
                <p>First time in India</p>
              </div>
              <div className="flex gap-5 px-2 pl-4">
                <Image src={Wall} alt={'wall'} width={50} height={45} className={'object-contain'} />
                <p>Usage: Exterior Facade Surface</p>
              </div>
            </div>
            <div className="ml-6 mt-3 h-full w-full border-2 border-red-base">
              <Image
                src={ProductImg7}
                width={550}
                height={415}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-full w-full object-cover lg:-ml-4  lg:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5  pt-20 md:p-16 lg:px-28 2xl:px-40 2xl:pb-60">
        <div className={`relative flex items-start gap-1 font-metropolis md:gap-2`}>
          <span className={`pl-1 font-montserrat text-xs font-bold md:text-xl 2xl:text-3xl`}>04</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-7xl 2xl:text-8xl`}>innov2+</h3>
        </div>
        <div className=" grid grid-cols-2 pb-20 md:pb-40 lg:pb-20">
          <div className="relative">
            <div className="absolute left-3 top-0 -z-50 h-[80%] w-full  border-2 border-red-base"></div>
            <Image
              src={ProductImg8}
              width={550}
              height={315}
              alt="sofa"
              className=" mt-3 h-[80%] w-full object-cover  lg:mt-5"
            />
            <div className="mr-14 lg:mr-20">
              <p className="mt-5 font-montserrat font-medium md:text-sm lg:text-[15px] 2xl:text-xl">
                With an unmatched blend of <span className="font-bold text-red-base">innovation</span> and{' '}
                <span className="font-bold text-red-base">excellence</span> , Innov2+ is here to transform your spaces
                into a realm of contemporary <span className="font-bold text-red-base">elegance</span> and{' '}
                <span className="font-bold text-red-base">cutting-edge</span> functionality.
              </p>
              <div className="mt-2 flex items-end justify-end">
                <Button onClick={() => router.push('/product/4')}>view range</Button>
              </div>
            </div>
          </div>
          <div className="-z-10 -ml-5 md:-ml-10 lg:-ml-14">
            <div className="ml-32 mr-5 mt-5 flex justify-end font-montserrat font-medium md:text-sm lg:text-base 2xl:text-2xl">
              <div className="flex gap-5 border-r px-2 pr-4">
                <Image src={Globe} alt={'shield'} width={30} height={45} className={'object-contain'} />
                <p>First time in the world</p>
              </div>
              <div className="flex gap-5 px-2 pl-4">
                <Image src={Wall} alt={'wall'} width={50} height={45} className={'object-contain'} />
                <p>Usage: Walls and Ceilings</p>
              </div>
            </div>
            <div className="ml-6 mt-3 h-full w-full border-2 border-red-base">
              <Image
                src={ProductImg6}
                width={550}
                height={315}
                alt="sofa"
                className="-z-10 -ml-3 mt-3 h-full w-full object-cover lg:-ml-4  lg:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProductInfo = () => {
  return (
    <div>
      <div className="md:hidden">
        <ProductInfoSm />
      </div>
      <div className="hidden md:block">
        <ProductInfoLg />
      </div>
    </div>
  )
}

export default ProductInfo
