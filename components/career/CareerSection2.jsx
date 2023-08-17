import { Increment, India, Social } from '@/utils/assets'
import Image from 'next/image'

const data = [
  {
    image: India,
    text: 'PARÉ Innovations has established a strong presence across Pan India, offering employees the opportunity to work on diverse projects nationwide.',
  },
  {
    image: Increment,
    text: 'Looking for a rewarding career in the Interior Goods Segment? Join PARÉ Innovations, where you can unleash your potential, contribute to industry-leading innovations, and be part of a supportive team.',
  },
  {
    image: Social,
    text: "At PARÉ Innovations, we foster an inclusive and collaborative work culture, where employees are valued and empowered to grow personally and professionally. Join us and become part of a community dedicated to our company's mission.",
  },
]

const CareerSection2 = () => {
  return (
    <section className="p-5 md:p-10 lg:px-20">
      <h2 className=" font-montserrat text-3xl font-bold md:text-4xl lg:text-5xl">Why Pare?</h2>
      <div className="mt-5 grid grid-cols-1 gap-10 md:mt-10 md:grid-cols-3 lg:mt-16">
        {data.map((item, idx) => (
          <div className="flex gap-5 md:flex-col" key={item.text}>
            <div className={`m-auto flex-1 ${idx === 1 ? 'order-2 md:order-none' : ''}`}>
              <Image
                src={item.image}
                alt={item.text.slice(0, 5)}
                className={
                  'h-full w-full object-contain object-bottom md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px]'
                }
              />
            </div>
            <div className="flex-1">
              <p className="font-montserrat leading-5 md:font-medium lg:leading-6">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CareerSection2
