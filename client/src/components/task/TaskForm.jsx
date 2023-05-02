import { useMutation } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { CREATE_TASK } from "../../pages/graphql/task";

const TaskForm = () => {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ["getProject"],
  });
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.id,
      },
    });
    e.target.reset();
    e.target.title.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add a task"
        name="title"
        className="bg-zinc-900 text-white w-full p-2 mb-2 mt-2 rounded-lg"
      />
      <button className="bg-sky-900 text-white w-full rounded-lg p-2">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
