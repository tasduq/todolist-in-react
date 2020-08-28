import React , {Component} from 'react'
import uuid from 'uuid/v4'
import './NewTodoForm.css'


class Newtodoform extends Component{
	constructor(props){
		super(props)
		this.state={
			todo:""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	handleChange(evt){
		this.setState({
			todo: evt.target.value
		})
		
	}
	
	handleSubmit(evt){
		evt.preventDefault()
		let newTodo = {...this.state , id:uuid()}
		this.props.addTodo(newTodo)
		this.setState({todo:""})
	}
	
	render(){
		return(
			<div>
				<form className = "NewTodoForm" onSubmit = {this.handleSubmit}>
					<input
						type = "text"
						value = {this.state.todo}
						onChange = {this.handleChange}
						placeholder = "Add Todo"
					/>
					<button>Add Todo</button>
				</form>
			</div>
		)
	}
}

export default Newtodoform;