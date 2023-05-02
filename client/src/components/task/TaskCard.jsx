import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../pages/graphql/task";

const TaskCard = ({ task }) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });

  return (
    <div className="bg-zinc-900 px-5 py-3 mb-2 flex justify-between">
      <h1>{task.title}</h1>
      <button
        className="bg-red-900 px-3 py-2 rounded-xl"
        onClick={() => {
          deleteTask({
            variables: {
              id: task._id,
            },
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
