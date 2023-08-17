'use client'
import { useState } from 'react'
import { NextProjectImg, NextProjectImgWeb } from '@/utils/assets'
import { Button } from '../custom'
import Api from '../../utils/api'
import { NEXT_PROJECT_API } from '../../utils/endpoints'
import { toast } from 'react-toastify'
import Image from 'next/image'

const NextProject = () => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await Api.post(NEXT_PROJECT_API, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <section className="px-5 pb-5 pt-12 md:p-10 lg:px-16 xl:px-24 2xl:px-40">
      <div className="grid  md:grid-cols-2 md:gap-5">
        <div className="absolute mt-5 h-[500px] w-[70%] bg-[#151515B5] bg-opacity-25 p-4 md:static md:mt-0 md:h-auto md:w-full">
          <h2 className="font-metropolis text-3xl leading-snug md:text-4xl lg:text-6xl lg:leading-snug">
            IT&apos;S TIME TO DISCUSS YOUR <span className="font-bold text-red-base">NEXT PROJECT</span>
          </h2>
          <p className="my-3 font-helvetica text-xs md:text-base lg:text-xl">
            Let&apos;s get the ball rolling on your next project! Reach out to us at PARÉ and let&apos;s discuss how we
            can bring your vision to life. We&apos;re excited to hear from you!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border-b-2 border-[#adadad] bg-transparent p-1 font-montserrat text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl"
                required
                name={data.name}
                value={data.name}
                onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
              />
              <input
                type="number"
                placeholder="Phone number"
                className="border-b-2 border-[#adadad] bg-transparent p-1 font-montserrat text-white outline-none placeholder:uppercase lg:py-3 lg:text-xl"
                required
                name={data.phone}
                value={data.phone}
                onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
              />
              <input
                type="email"
                placeholder="email"
                className="border-b-2 border-[#adadad] bg-transparent p-1  font-montserrat text-white  outline-none placeholder:uppercase lg:py-3 lg:text-xl"
                required
                name={data.email}
                value={data.email}
                onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <p className="mb-5 mt-3 font-montserrat text-xs md:text-base lg:mb-8 lg:mt-5 lg:text-xl">
              I AGREE TO TERMS OF THE PRIVACY POLICY
            </p>
            <Button variant="outlined" type="submit" className={'z-10'}>
              SEND REQUEST
            </Button>
          </form>
        </div>
        <div className="h-[550px] md:h-auto">
          <Image
            src={NextProjectImg}
            alt="next"
            width={300}
            height={300}
            className="ml-auto h-full w-[80%] object-cover md:hidden"
            loading="lazy"
          />
          <Image
            src={NextProjectImgWeb}
            alt="next"
            width={500}
            height={600}
            className="ml-auto hidden h-full object-cover md:block md:w-[350px] lg:w-[500px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default NextProject
