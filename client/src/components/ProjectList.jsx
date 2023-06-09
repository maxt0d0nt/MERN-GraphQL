import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_PROJECTS } from '../pages/graphql/projects';
import ProjectCard from './ProjectCard';



const ProjectList = () => {
const { loading, error, data } = useQuery(GET_PROJECTS)

if (loading) return <p>Loading...</p>
if (error) return <p>Error</p>



  return (
    <div className='overflow-y-auto h-60 w-full px-5'>
        {data.projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
        )
        )}
    </div>
  )
}

export default ProjectList