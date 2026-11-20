import { format } from "date-fns"
import { createTodo } from "./task.js"

const sample = {
	title: "반지의 제왕",
	description: "장편 소설이다.",
	isCompleted: false,
	dueDate: null,
	priority: "high",
}

console.log(createTodo(sample))
console.log(format(new Date(), 'yyyy-MM-dd'))
console.log("Hello, world")
