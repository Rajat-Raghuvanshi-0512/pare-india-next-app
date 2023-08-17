import Link from "next/link"

const LastSection = ({ dark = true, mainText, btnText, btnRoute="", showOnMobile = false, showonDesktop = true }) => {
  return (
    <div className={` ${showOnMobile ? '' : 'hidden md:block'}`}>
      <div
        className={`flex items-center justify-between gap-5 p-5 text-xl font-light uppercase text-white md:gap-20 md:p-10 md:px-10 md:text-4xl lg:gap-40 lg:px-28 lg:text-5xl 2xl:px-40 ${
          dark ? 'bg-black-base' : 'bg-red-base'
        } ${showonDesktop ? '' : 'md:hidden'} `}
      >
        <div className="w-[70%] font-montserrat text-base leading-snug md:text-3xl lg:text-5xl lg:leading-snug">
          {mainText ? mainText : "Let's work together to create the space of your dreams."}
        </div>
        <div>
          <Link
            href={btnRoute ? btnRoute : '/contact'}
            className="flex h-16 w-16 cursor-pointer items-center justify-center break-words rounded-full border border-white text-center font-metropolis text-[8px] font-bold md:h-28 md:w-28 md:text-sm md:font-normal"
          >
            {btnText ? `${btnText}` : 'Contact us'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LastSection
