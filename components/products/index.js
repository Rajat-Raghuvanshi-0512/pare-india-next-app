import { lazy } from 'react'
const PyramidBanner = lazy(() => import('./pyramid/PyramidBanner'))
const ArchBanner = lazy(() => import('./arch/ArchBanner'))
const IntroSection = lazy(() => import('./IntroSection'))
const ProductInfo = lazy(() => import('./ProductInfo'))
const Brochure = lazy(() => import('./linea/Brochure'))
const ImgGallery = lazy(() => import('./linea/ImgGallery'))
const Info = lazy(() => import('./linea/Info'))
const LineaBanner = lazy(() => import('./linea/LineaBanner'))
const MoreProducts = lazy(() => import('./linea/MoreProducts'))
const Shades = lazy(() => import('./linea/Shades'))
const Trims = lazy(() => import('./linea/Trims'))
const P1Section1 = lazy(() => import('./product1/P1Section1'))
const P1Section2 = lazy(() => import('./product1/P1Section2'))
const Product1Banner = lazy(() => import('./product1/Product1Banner'))

export {
  IntroSection,
  ProductInfo,
  Product1Banner,
  P1Section1,
  P1Section2,
  ImgGallery,
  Info,
  LineaBanner,
  Shades,
  Brochure,
  MoreProducts,
  Trims,
  ArchBanner,
  PyramidBanner,
}
