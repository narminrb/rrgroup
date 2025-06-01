import React from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const NewsCard = ({ news }) => {
  const title = news?.name || 'No Title'
  const description = news?.desc || 'No Description'
  const imageUrl = news?.image?.url
  ? news.image.url.startsWith('http')
    ? news.image.url
    : `${import.meta.env.VITE_API_BASE_URL}${news.image.url}`
  : 'https://via.placeholder.com/300'


  return (
   <div>
    <Link to={`/rrgroup/news/${news?.id}`}>
     <div className={clsx(styles.newscard)}>
     <div className={clsx(styles.newsimage)}>
     <img
        className={clsx(styles.newsimg)}
        src={imageUrl}
        alt={title}
      />
     </div>
      <div className="p-3">
        <h3 className={clsx(styles.newsname)}>{title}</h3>
        <p className={clsx(styles.newsdesc)}>{description}</p>
      </div>
    </div>
    </Link>
   </div>
  )
}

export default NewsCard
