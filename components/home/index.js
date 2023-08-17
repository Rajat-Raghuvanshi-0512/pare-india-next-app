import { lazy } from 'react'
const AboutSection = lazy(() => import('./AboutSection'))
const Hero = lazy(() => import('./Hero'))
const InfiniteScroll = lazy(() => import('./InfiniteScroll'))
const NextProject = lazy(() => import('./NextProject'))
const PareIndiaRotatingImg = lazy(() => import('./PareIndiaRotatingImg'))
const Portfolio = lazy(() => import('./Portfolio'))
const ProductsRange = lazy(() => import('./ProductsRange'))
const Projects = lazy(() => import('./Projects'))
const Qualities = lazy(() => import('./Qualities'))
export {
  Hero,
  AboutSection,
  ProductsRange,
  InfiniteScroll,
  Portfolio,
  Qualities,
  Projects,
  NextProject,
  PareIndiaRotatingImg,
}
