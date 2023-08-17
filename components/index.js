import { lazy } from 'react'
const Loader = lazy(() => import('./Loader'))
const ContactFloatBtn = lazy(() => import('./ContactFloatBtn'))
const Footer = lazy(() => import('./Footer'))
const Navbar = lazy(() => import('./Navbar'))
const LastSection = lazy(() => import('./LastSection'))

export { Navbar, ContactFloatBtn, Footer, LastSection, Loader }
