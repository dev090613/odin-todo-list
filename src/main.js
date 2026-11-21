import { createTodo  } from "./task.js"
import { createProject } from "./project.js"
import { getProjects, addProject, replaceProject } from "./store.js"

const sample = {
	title: "반지의 제왕",
	description: "장편 소설이다.",
	isCompleted: false,
	dueDate: null,
	priority: "high",
}

const todo = createTodo(sample)
const first = addTask(createProject({ name: "1st project" }), todo)
const second = createProject({ name: "2nd project" })
addProject(first)
addProject(second)

replaceProject(toggleProjectTask(first, todo.id))

const [updatedFirst, unchangedSecond] = getProjects()
console.assert(updatedFirst.tasks[0].isCompleted === true, "토글이 반영되어야 함")
console.assert(todo.isCompleted === false, "원본 todo는 그대로여야 함")
console.assert(unchangedSecond === second, "다른 프로젝트는 그대로여야 함")

addProject(createProject( { name: "1st project"} ))
addProject(createProject( { name: "2nd project"} ))
console.log(getProjects());
