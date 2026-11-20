import { toggleComplete } from "./task.js"

let nextId = 1;

const createProject = function({ name , initialTasks=[] }) {
  if (!Array.isArray(initialTasks))
    throw new TypeError("initialTasks must be an array.")

  const tasks = [ ...initialTasks ]

  if (typeof name !== 'string' || name.trim() === "")
    throw new Error("Project name is required.")

  name = name.trim();

  const id = nextId++;
  return {
    id,
    name,
    tasks,
  }
}

const addTask = function(project, todo) {
  const updatedTasks = [ ...project.tasks, todo ]
  return { ...project, tasks: updatedTasks }
}

const toggleProjectTask = function(project, taskId) {
  if (!project.tasks.some( (t) => t.id === taskId ))
    return project

  const updatedTasks = project.tasks.map( 
    (task) => task.id === taskId ? toggleComplete(task) : task
  )
  return { ...project, tasks: updatedTasks };
}


export { createProject, addTask, toggleProjectTask }
