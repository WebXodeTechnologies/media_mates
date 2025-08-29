import React from 'react'
import HeroSection from '@/app/components/contactPage/HeroSection'
import MarqueeBar from '@/app/components/mainPage/MarqueeBar'
import Form from '@/app/components/contactPage/Form'
import GoogleMap from '@/app/components/contactPage/GoogleMap'
import CTASection from '@/app/components/mainPage/CTASection'

const page = () => {
  return (
    <main>
    <HeroSection />
    <MarqueeBar />
    <Form />
    <GoogleMap />
    <CTASection />

    </main>
  )
}

export default page
