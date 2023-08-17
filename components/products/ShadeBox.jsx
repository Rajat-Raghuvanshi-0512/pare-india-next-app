import Image from 'next/image'

const ShadeBox = ({ item }) => {
  return (
    <div className="relative mb-20 mt-10 h-[300px] w-[220px] md:h-[380px] md:w-[310px]">
      <Image src={item.img} alt={'metallic'} className={'h-[300px] w-[220px] md:h-[380px] md:w-[310px]'} />
      <Image
        src={item.shade}
        alt={'shade'}
        width={100}
        height={100}
        className={
          'absolute bottom-0 right-0 h-[70px] w-[70px] translate-x-[40%] translate-y-[40%] md:h-[100px] md:w-[100px]'
        }
      />
      <div className="mt-1 text-center font-montserrat font-light uppercase text-white">{item?.fname}</div>
      <div className="text-center font-montserrat font-light uppercase text-white">{item?.lname}</div>
    </div>
  )
}

export default ShadeBox
