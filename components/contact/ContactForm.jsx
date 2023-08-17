'use client'
import { useState } from 'react'
import { ContactImg, ContactImgPhone } from '@/utils/assets'
import { Button } from '../custom'
import Api from '../../utils/api'
import { toast } from 'react-toastify'
import { CONTACT_API } from '../../utils/endpoints'
import Image from 'next/image'

const ContactForm = () => {
  const [value, setValue] = useState('REQUIREMENT TYPE')
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (value === 'REQUIREMENT TYPE') return toast.error('Please fill all the fields')
    try {
      const response = await Api.post(
        CONTACT_API,
        { ...data, requirement: value },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      toast.success(response.data.message)
      setData({
        name: '',
        phone: '',
        email: '',
        message: '',
      })
      setValue('REQUIREMENT TYPE')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <section className="py-5 md:p-10 md:pr-0 lg:py-20 lg:pl-20  2xl:pl-40">
      <div className="grid md:grid-cols-2 md:gap-5">
        <div className="absolute mt-6 h-[590px] w-[75%] scale-95 bg-[#151515B5] bg-opacity-25 p-4 md:static md:h-auto md:w-full">
          <h2 className="font-metropolis text-3xl leading-snug md:text-4xl lg:text-5xl lg:leading-snug 2xl:text-7xl">
            <div className="flex items-center gap-1 lg:gap-3">
              <div className=" font-medium text-red-base">LET&apos;S WORK</div>
              <div className="mr-auto h-[2px] w-[20%] bg-red-base md:w-[25%] lg:h-1"></div>
            </div>
            on your project
          </h2>
          <p className="my-3 font-helvetica text-xs md:text-base lg:text-xl 2xl:text-3xl">
            Let&apos;s work together to turn your design dreams into reality.
          </p>
          <p className="my-3 font-helvetica text-xs md:text-base lg:text-xl 2xl:text-3xl">
            Fill out our form and our team will be in touch with you shortly to get started on your project
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 2xl:gap-10">
              <input
                type="text"
                placeholder="Name"
                className="border-b-2 border-[#adadad] bg-transparent p-1 font-montserrat text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl 2xl:text-2xl"
                name={data.name}
                value={data.name}
                onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
              <input
                type="number"
                placeholder="Phone number"
                className="border-b-2 border-[#adadad] bg-transparent p-1 font-montserrat text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl 2xl:text-2xl"
                name={data.phone}
                value={data.phone}
                onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
                required
              />
              <input
                type="email"
                placeholder="email"
                className="border-b-2 border-[#adadad] bg-transparent p-1  font-montserrat text-white  outline-none placeholder:uppercase lg:py-3 lg:text-xl 2xl:text-2xl"
                name={data.email}
                value={data.email}
                onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
              <ul className="form-dropdown relative border-b-2 border-[#adadad] bg-black-base bg-transparent p-1  font-montserrat text-[#adadad] outline-none placeholder:uppercase lg:py-3 lg:text-xl 2xl:text-2xl">
                <li
                  className={` init bg-black-base uppercase text-gray-400  `}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  {value}
                </li>
                <li
                  className={`mb-2 mt-5 bg-black-base py-2 text-center text-white ${!open && 'hidden'} `}
                  onClick={() => {
                    setValue('walls')
                    setOpen(false)
                  }}
                >
                  Walls
                </li>
                <li
                  className={`mb-2 bg-black-base py-2 text-center text-white ${!open && 'hidden'} `}
                  onClick={() => {
                    setValue('ceiling')
                    setOpen(false)
                  }}
                >
                  Ceiling
                </li>
                <li
                  className={`mb-2 bg-black-base py-2 text-center text-white ${!open && 'hidden'} `}
                  onClick={() => {
                    setValue('facades')
                    setOpen(false)
                  }}
                >
                  Facades
                </li>
              </ul>
              <textarea
                type="text"
                placeholder="your message"
                className="resize-none border-b-2 border-[#adadad] bg-transparent  p-1 font-montserrat  text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl"
                name={data.message}
                value={data.message}
                rows={3}
                onChange={(e) => setData((prev) => ({ ...prev, message: e.target.value }))}
                required
              />
            </div>
            <p className="mb-5 mt-6 font-montserrat text-xs md:text-base lg:mb-8 lg:mt-5 lg:text-xl 2xl:text-2xl">
              I AGREE TO TERMS OF THE PRIVACY POLICY
            </p>
            <Button variant="outlined" type="submit" className={'2xl:px-10 2xl:py-4 2xl:text-2xl'}>
              SEND REQUEST
            </Button>
          </form>
        </div>
        <div className="h-[640px] w-full md:h-auto">
          <Image
            src={ContactImgPhone}
            alt="img"
            width={500}
            height={800}
            className="ml-auto mr-7 h-full w-[75%] object-cover md:hidden"
          />
          <Image
            src={ContactImg}
            alt="img"
            width={500}
            height={600}
            className="hidden h-full w-full object-cover md:block"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
