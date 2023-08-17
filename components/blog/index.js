import { lazy } from 'react'
const BlogInfoCards = lazy(() => import('./BlogInfoCards'))
const BlogDescription = lazy(() => import('./BlogDescription'))
const BlogInfoBanner = lazy(() => import('./BlogInfoBanner'))
const BlogSection = lazy(() => import('./BlogSection'))

export { BlogSection, BlogInfoBanner, BlogDescription, BlogInfoCards }
