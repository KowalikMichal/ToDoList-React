import React, { Component } from 'react';

class NewTask extends Component{
	constructor(props){
		super(props);
		this.state = {
			inputValue: null,
		}
	}
	buttonAdd = (e) => {
		e.preventDefault();
		this.props.onUpdate(this.state.inputValue);
		e.target.parentNode.reset();
	}
	inputChange = (e) => {
		this.setState({inputValue: e.target.value});
	}
	render(){
		return(
			<form className="add-Items">
				<input type="text"placeholder="New task" required onChange={this.inputChange} />
				<input type="submit" value="Add new task" onClick={this.buttonAdd} />
			</form>
		);
	}
}

export default NewTask;