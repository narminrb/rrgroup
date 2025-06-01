import React from 'react'
import HomeBanner from '@/components/sections/homeBanner'
import AboutUs from '@/components/sections/aboutUs'
import HomeRanking from '@/components/sections/homeRanking'
import HomeProjects from '@/components/sections/homeProjects'
import HomeChoose from '@/components/sections/homeChoose'

const HomeTemplates = () => {
  return (
    <div>
        <HomeBanner/>
        <AboutUs/>
        <HomeRanking/>
        <HomeProjects/>
        <HomeChoose/>
    </div>
  )
}

export default HomeTemplates