import React , {Component} from 'react'
import Todo from './Todo'
import Newtodoform from './Newtodoform'
import "./TodoList.css"

class Todolist extends Component{
	constructor(props){
		super(props)
		this.state = {
			todos : [
				
			]
		}
		this.addTodo = this.addTodo.bind(this)
		this.remove = this.remove.bind(this)
		this.updateTodo = this.updateTodo.bind(this)
	}
	
	addTodo(newtodo){
		this.setState(st => {
			return{
				todos : [...st.todos , newtodo]
			}
			
		})
	}
	
	remove(id){
		this.setState(st => {
			return{
				todos: [...st.todos.filter((todo) => todo.id !== id)]
			}
		})
	}
	
	updateTodo(id , updatedTodo){
		this.setState(st => {
			return{
					todos : [...st.todos.map(todo => {
						if(todo.id === id){
							todo.todo = updatedTodo
					}
					return todo
				})]
			}
			
		})
	}
	
	render(){
		let todos = this.state.todos.map((todo) => (
			<Todo todo = {todo.todo} key = {todo.id} id = {todo.id} remove = {this.remove} updateTodo = {this.updateTodo} />
		))
		return(
			<div className = "TodoList">
				<h1>Todo list <span>React Todo List app</span> </h1>
				<ul>{todos}</ul>
				
				<Newtodoform  addTodo = {this.addTodo}/>
			</div>
		)
	}
}

export default Todolist;