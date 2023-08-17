'use client'
import { P1Section1, P1Section2, Product1Banner } from '@/components/products'
import { productsData } from '@/utils/constants'
import { useParams } from 'next/navigation'
import React from 'react'

const ProductInfo = () => {
    const { id } = useParams()
  return (
    <>
      <Product1Banner data={productsData[id]?.bannerSection} />
      <P1Section1 data={productsData[id]?.section1data} />
      <P1Section2 data={productsData[id]?.section2data} />
    </>
  )
}

export default ProductInfo