import { useMutation } from "@apollo/client";
import React from "react";
import {useParams} from 'react-router-dom'
import { CREATE_TASK } from "../../pages/graphql/task";


const TaskForm = () => {

  const [createTask] = useMutation(CREATE_TASK, {
refetchQueries: ["getProject"],
  });
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.id
      },
    });
    e.target.reset();
    e.target.title.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
