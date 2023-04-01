import { useMutation } from '@apollo/client';
import React, { useState } from 'react'

const ProjectForm = () => {

const [project, setProject] = useState({
  name:"",
  desription:"",
});
useMutation();

const handleChange = ({ target: { name, value } }) =>
setProject({
  ...project,
  [name]: value,
});

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(project)
}

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' placeholder='write a title' onChange={handleChange}
      />
      <textarea name='description' rows="3" placeholder='write a description' onChange={handleChange}></textarea>
      <button>save</button>
    </form>
  )
}

export default ProjectForm