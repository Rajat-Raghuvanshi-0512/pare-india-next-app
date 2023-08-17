import { lazy } from 'react'
const ContactForm = lazy(() => import('./ContactForm'))
const ContactInfo = lazy(() => import('./ContactInfo'))
const Map = lazy(() => import('./Map'))

export { ContactForm, ContactInfo, Map }
