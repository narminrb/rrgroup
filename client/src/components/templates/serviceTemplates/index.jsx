import ServiceCommerce from '@/components/sections/serviceCommerce'
import ServiceConstruction from '@/components/sections/serviceConstruction'
import ServiceLogistics from '@/components/sections/serviceLogistics'
import ServiceOffices from '@/components/sections/serviceOffices'
import ServiceSetem from '@/components/sections/serviceSetem'
import React from 'react'

const ServiceTemplates = () => {
  return (
    <div>
        <ServiceConstruction/>
        <ServiceCommerce/>
        <ServiceLogistics/>
        <ServiceOffices/>
        <ServiceSetem/>
    </div>
  )
}

export default ServiceTemplates