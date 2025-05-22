import React from 'react'
import { CertificateSwiperImage, CertificateSwiperImageContainerWithHover } from '@/ui/aboutCertificate'

const CertificateSwiperCard = ({ ImageSrc,  }) => {
    return (
        <CertificateSwiperImageContainerWithHover>
        <CertificateSwiperImage src={ImageSrc} alt="Instagram Image" />
      </CertificateSwiperImageContainerWithHover>
    )
}

export default CertificateSwiperCard
