import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const ProjectsCard = ({ project }) => {
  const title = project?.name || 'No Title'
  const description = project?.content || 'No Description'
  const image = project?.images[0]
  const imageUrl = image
    ? `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${image}`
    : 'https://via.placeholder.com/150';


  return (
   <div>
    <Link to={`/rrgroup/layihələr/${project.id}`}>
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
