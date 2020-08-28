import React , {Component} from 'react'
import './Todo.css'

class Todo extends Component{
	constructor(props){
		super(props)
		this.state = {
			isEditting : false,
			todo : this.props.todo,
			
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleUpdateEdit = this.handleUpdateEdit.bind(this)
	}
	
	handleClick(){
		this.props.remove(this.props.id)
	}
	
	handleEdit(){
		this.setState({isEditting: !this.state.isEditting})
	}
	
	handleChange(evt){
		this.setState({
			todo: evt.target.value
		})
	}
	
	handleUpdateEdit(evt){
		evt.preventDefault()
		this.props.updateTodo(this.props.id , this.state.todo)
		this.setState({isEditting : false})
	}
	
	render(){
		let show;
		
		if(this.state.isEditting){
			return(
				<div className = "Todo">
					<form className = "Todo-edit-form" onSubmit= {this.handleUpdateEdit}>
						<input 
							type = "text"
							value = {this.todo}
							onChange = {this.handleChange}
							name = "todo"

						/>
						<button>Save</button>
				   </form>
				</div>
				
			)
		}else{
				return(
				<div className ="Todo">
					<li>{this.props.todo}</li>
					<div className = "Todo-buttons">
						<button onClick = {this.handleEdit} ><i class = 'fas fa-pen' /></button>
					    <button onClick = {this.handleClick}><i class = 'fas fa-trash' /></button>
					</div>
					
					
				</div>
			)
			
		}
		
		
	}
}

export default Todo;