import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '@/constants/QueryKeys'
import ProjectsCard from '@/components/shared/projectsCards'
import { getAPiData } from '@/http/api'
const ProjectsPage = () => {
  const { data:projectData, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.PROJECTCARDS],
    queryFn: async () => await getAPiData('projectcards?populate=*'),
  });

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  const projects = projectData || []

  return (
    <div className='container max-w-screen-xl mx-auto my-20 px-3'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
      
    </div>
  )
}

export default ProjectsPage
