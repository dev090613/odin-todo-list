let nextId = 1;
const priorityRange = ["high", "medium", "low"]

function createTodo({ title, description="", isCompleted=false, dueDate=null, priority="medium" }) {
  if (title.trim()="") {
    throw new Error("title is required.")
  }

  if (!priorityRange.includes(priority)) {
    throw new RangeError(`Invalid priority: ${priority}`)
  }
  const id = nextId++;
  return {
    id,
    title,
    description,
    isCompleted,
    dueDate,
    priority,
  }
}

export { createTodo }
