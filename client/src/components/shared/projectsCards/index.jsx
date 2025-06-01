import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const ProjectsCard = ({ project }) => {
  const title = project?.name || 'No Title'
  const description = project?.desc || 'No Description'
  const imageUrl = project?.image?.url
  ? project.image.url.startsWith('http')
    ? project.image.url
    : `${import.meta.env.VITE_API_BASE_URL}${project.image.url}`
  : 'https://via.placeholder.com/300'


  return (
   <div>
    <Link to={`/rrgroup/projects/${project.id}`}>
     <div className={clsx(styles.projectcard)}>
     <div className={clsx(styles.projectimage)}>
     <img
        className={clsx(styles.projectimg)}
        src={imageUrl}
        alt={title}
      />
     </div>
      <div className="p-5">
        <h3 className={clsx(styles.projectname)}>{title}</h3>
        <p className={clsx(styles.projectdesc)}>{description}</p>
      </div>
    </div>
    </Link>
   </div>
  )
}

export default ProjectsCard
