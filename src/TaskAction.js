import React, { Component } from 'react';

class TaskAction extends Component{
	handleRemoveAll = (e) =>{
		localStorage.removeItem('task');
	}

	handleChangeAll = (e, markAll) =>{
		const currentState = JSON.parse(localStorage.getItem('task'));
		const newState = currentState.map(element => {
			return {
				Text: element.Text,
				done: markAll,
			}
		});
		localStorage.setItem('task', JSON.stringify(newState));
	}
	render(){
		return(
		<form className="actions">
			<input type="submit" value="🗑️ Remove all" className="red" onClick={this.handleRemoveAll}/>
			<input type="submit" value="✔️ Finish all" onClick={(e)=> this.handleChangeAll(e,true)} />
			<input type="submit" value="✖️ Unfinish all" onClick={(e)=> this.handleChangeAll(e,false)}/>
		</form>
		);
	}
}

export default TaskAction;
