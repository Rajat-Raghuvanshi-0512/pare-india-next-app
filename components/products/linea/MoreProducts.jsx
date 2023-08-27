'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ImageBox = ({ image, smallImg, heading, desc, idx, redirect }) => {
  const router = useRouter();
  return (
    <div
      className={`relative drop-shadow-lg ${idx == 0 ? 'z-10' : 'z-0'}`}
      onClick={() => router.push(`/product${redirect}`)}
    >
      <Image
        alt={heading}
        src={image}
        className={'h-[250px] w-full md:h-[300px]'}
      />
      <Image
        alt={heading}
        src={smallImg}
        className={`box-shadow absolute left-0 top-[30%] h-[300px] -translate-x-[50%] -translate-y-[50%]  md:left-0 md:top-[35%] md:h-[380px] w-full`}
      />
      <div className="bg-white p-5 text-black md:p-10">
        <h6 className="text-xl font-bold">{heading}</h6>
        <p className="py-5 text-sm">{desc}</p>
      </div>
    </div>
  );
};

const MoreProducts = ({ data, type = 'Easy+' }) => {
  return (
    <section className="bg-red-base p-5 font-montserrat text-white md:p-10 lg:px-20 2xl:px-40">
      <h2 className="text-center text-2xl font-bold md:text-left md:text-3xl lg:text-5xl">
        Expanding Possibilities with {type} Discover More Products
      </h2>
      <p className="my-5 text-center text-base md:my-10 md:text-left md:text-xl lg:text-2xl">
        Our versatile product range that includes two additional innovative
        solutions. Discover more with {type} and explore the possibilities.
      </p>
      <div className="my-5 grid gap-14 p-5 md:my-10 md:grid-cols-2 md:gap-10 lg:gap-20 2xl:gap-40">
        {data.map((item, idx) => (
          <ImageBox key={item.heading} {...item} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default MoreProducts;
