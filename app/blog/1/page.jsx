import { BlogDescription, BlogInfoBanner, BlogInfoCards } from '@/components/blog'
import React from 'react'

const BlogInfoPage = () => {
  return (
    <>
     <BlogInfoBanner />
      <BlogDescription />
      <BlogInfoCards />
    </>
  )
}

export default BlogInfoPage