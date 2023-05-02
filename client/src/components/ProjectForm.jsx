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
    <form onSubmit={handleSubmit} className="w-2/5">
      {error && <p>{error.message}</p>}
      <input
        type="text"
        name="name"
        placeholder="write a title"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      />
      <textarea
        name="description"
        rows="3"
        placeholder="write a description"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"

      ></textarea>
      <button className="bg-blue-500 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400" disabled={!project.name || !project.description || loading}>
        save
      </button>
    </form>
  );
};

export default ProjectForm;
