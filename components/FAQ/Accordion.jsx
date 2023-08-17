import { useState } from 'react'
import { MinusCircle, PlusCircle } from '@/utils/assets'
import Image from 'next/image'

const Accordion = ({ heading, body }) => {
  const [showBody, setShowBody] = useState(false)
  return (
    <div>
      <div className="flex justify-between gap-5 border-b border-red-base py-5 md:border-b-[3px] md:py-10">
        <h3 className={`font-metropolis text-base md:text-3xl lg:text-4xl ${showBody ? 'font-bold' : 'font-medium'} `}>
          {heading}
        </h3>
        <div className="flex cursor-pointer items-center justify-center" onClick={() => setShowBody(!showBody)}>
          {showBody ? (
            <Image src={MinusCircle} alt="plus" width={40} className="w-[20px] md:w-[40px]" />
          ) : (
            <Image src={PlusCircle} alt="plus" width={40} className="w-[20px] md:w-[40px]" />
          )}
        </div>
      </div>
      <div
        className={`border-b border-red-base py-5 font-montserrat text-xs font-medium md:border-b-[3px] md:py-10 md:text-base ${
          !showBody && 'hidden'
        } `}
      >
        {body}
      </div>
    </div>
  )
}

export default Accordion
