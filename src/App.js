import React, { Component } from 'react';
import ListItem from './ListItem';
import NewTask from './NewTask';
import TaskAction from './TaskAction';
import './index.css';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			allTask: [],
		};
	}
	componentWillMount(){
		const allTask = JSON.parse(localStorage.getItem('task')) || [];
		this.setState({allTask});
	}

	onUpdate = (value) =>{
		if (value === null) return alert('First you must type new task!');
		const newItem = {
			Text: value,
			done: false,
		};
		this.setState({allTask: [...this.state.allTask, newItem]}, ()=>{
			localStorage.setItem('task', JSON.stringify(this.state.allTask));
		});
	}

	deleteTask = (newState) =>{
		this.setState({allTask: newState});
		localStorage.setItem('task', JSON.stringify(newState.filter(function(n){ return n !== undefined })));
	}

	render() {
		return (
			<div className="wrapper">
				<h2>To-Do list</h2>
				<ul className="list">
					<ListItem passedVal={this.state.allTask} deleteTask={this.deleteTask}/>
				</ul>
				<NewTask onUpdate={this.onUpdate}/>
				<TaskAction />
			</div>
		);
  }
}

export default App;