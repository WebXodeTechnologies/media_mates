import React from 'react'
import HeroBody from '@/app/components/blogPage/HeroBody'
import MarqueeBar from '@/app/components/mainPage/MarqueeBar'
import BlogMain from '@/app/components/blogPage/BlogMain'
import CTASection from '@/app/components/mainPage/CTASection'

const page = () => {
  return (
    <main>
      <HeroBody />
      <MarqueeBar />
      <BlogMain />
      <CTASection />
    </main>
  )
}

export default page
