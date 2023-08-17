import { ContactForm, ContactInfo, Map } from '@/components/contact'
import { ContactBg } from '@/utils/assets'
import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="relative z-0 overflow-clip bg-black-base text-white">
      <Image
        src={ContactBg}
        alt="contact-bg"
        className="absolute left-0 top-0 -z-[1] w-full object-contain opacity-[0.15]"
      />
      <div className=" p-5 pt-20 md:p-16 lg:p-20 lg:pt-28 2xl:px-40">
        <ContactInfo />
      </div>
      <ContactForm />
      <Map />
    </div>
  )
}

export default ContactPage