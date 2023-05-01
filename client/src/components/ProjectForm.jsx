import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_PROJECT, GET_PROJECTS } from "../pages/graphql/projects";

const ProjectForm = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
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
      variables: {
        name: project.name,
        description: project.description,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      <input
        type="text"
        name="name"
        placeholder="write a title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        rows="3"
        placeholder="write a description"
        onChange={handleChange}
      ></textarea>
      <button disabled={!project.name || !project.description || loading}>
        save
      </button>
    </form>
  );
};

export default ProjectForm;
