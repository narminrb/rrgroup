import React from 'react'
import AdminValues from '../shared/AdminValues'
import AdminAboutMissions from '../shared/AdminMission'
import AdminAboutCertificates from '../shared/AdminAboutCertificates'
import AdminAboutTeam from '../shared/AdminAboutTeam'
import AdminAboutVision from '../shared/AdminAboutVision'
import AdminAboutHistory from '../shared/AdminAboutHistory'

const AdminAbout = () => {
  return (
    <div>
        <AdminAboutMissions/>
        <AdminAboutVision/>
        <AdminValues/>
        <AdminAboutHistory/>
        <AdminAboutCertificates/>
        <AdminAboutTeam/>
    </div>
  )
}

export default AdminAbout