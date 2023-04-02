import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_PROJECT, GET_PROJECTS } from '../pages/graphql/projects';

const ProjectForm = () => {

const [project, setProject] = useState({
  name:"",
  desription:"",
});
const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
  refetchQueries: [
    {
      query: GET_PROJECTS,
    },
    "GetProjects",
  ],
});

const handleChange = ({ target: { name, value } }) =>
setProject({
  ...project,
  [name]: value,
});

const handleSubmit = (e) => {
  e.preventDefault();
  createProject({
    variable: {
      name: project.name,
      desription: project.desription
    }
  })
}

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      <input type='text' name='name' placeholder='write a title' onChange={handleChange}
      />
      <textarea name='description' rows="3" placeholder='write a description' onChange={handleChange}></textarea>
      <button
      disabled={!project.name || !project.desription || loading}
      >save</button>
    </form>
  )
}

export default ProjectForm