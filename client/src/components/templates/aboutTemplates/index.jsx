import AboutBoard from '@/components/sections/aboutBoard'
import AboutCertificate from '@/components/sections/aboutCertificate'
import AboutHistory from '@/components/sections/aboutHistory'
import AboutManagement from '@/components/sections/aboutManagement'
import InstaSwiper from '@/components/sections/aboutMission'
import AboutValues from '@/components/sections/aboutValues'
import AboutVision from '@/components/sections/aboutVision'
import React from 'react'

const AboutTemplates = () => {
  return (
    <div>
        <InstaSwiper/>
        <AboutVision/>
        <AboutValues/>
        <AboutHistory/>
        <AboutBoard/>
        <AboutManagement/>
        <AboutCertificate/>
    </div>
  )
}

export default AboutTemplates