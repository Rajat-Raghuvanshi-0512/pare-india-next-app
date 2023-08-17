import { LastSection } from '@/components'
import { BlogSection } from '@/components/blog'
import React from 'react'

const BlogPage = () => {
  return (
    <>
    <BlogSection />
    <LastSection
      showOnMobile
      mainText={'SEE SOMETHING YOU LIKE? CONTACT OUR TEAM TO SEND A REQUEST.'}
      showonDesktop={false}
      dark={false}
    />
    </>
  )
}

export default BlogPage