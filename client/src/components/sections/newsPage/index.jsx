import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '@/constants/QueryKeys'
import { getAPiData } from '@/http/api'
import NewsCard from '@/components/shared/newsCard'
const NewsPage = () => {
  const { data:newsData, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.NEWSCARDS],
    queryFn: async () => await getAPiData('newscards?populate=*'),
  });

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  const news = newsData || []

  return (
    <div className='container max-w-screen-xl mx-auto my-20 px-3'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {news.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  )
}

export default NewsPage
