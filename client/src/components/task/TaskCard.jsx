import React from 'react'

const TaskCard = ({task}) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <button>Delete</button>
    </div>
  )
}

export default TaskCard