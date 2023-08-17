import { LastSection } from '@/components'
import { AboutUs, Vision } from '@/components/about'
import React from 'react'

const AboutPage = () => {
  return (
    <main>
      <div className="p-5 pt-20 md:p-10 lg:p-20 2xl:px-40">
        <AboutUs />
      </div>
      <Vision />
      <LastSection />
    </main>
  )
}

export default AboutPage