import { lazy } from 'react'
const CareerSection1 = lazy(() => import('./CareerSection1'))
const CareerSection2 = lazy(() => import('./CareerSection2'))
const CareerSection3 = lazy(() => import('./CareerSection3'))
const Banner = lazy(() => import('./form/Banner'))
const Form = lazy(() => import('./form/Form'))

export { CareerSection1, CareerSection2, CareerSection3, Banner, Form }
