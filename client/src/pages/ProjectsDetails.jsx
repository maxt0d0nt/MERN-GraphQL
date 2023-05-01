import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "./graphql/projects";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";


const ProjectsDetails = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <button>Delete</button>
      <TaskForm/>
      <TaskList tasks={data.project.tasks}/>
    </div>
  );
};

export default ProjectsDetails;
