import React, { Component } from 'react';

class ListItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			inputProps: [],
		}
	}
	componentDidMount(){
		this.setState({inputProps: this.props.passedVal});
	}
	componentWillReceiveProps(nextProps){
		const currnetState = new Set (this.state.inputProps);
		const receiveState = new Set (nextProps.passedVal);
		const difference = new Set([...receiveState].filter(x => !currnetState.has(x)));
		this.setState({inputProps: [...this.state.inputProps, ...difference]});
	}
	delete = (e) =>{
		let currnetState = this.state.inputProps;
		const deleteIndex = e.target.dataset.index;
		delete currnetState[deleteIndex];
		currnetState = currnetState.filter(function(n){ return n !== undefined })
		this.setState({inputProps: currnetState}, ()=>{
			this.props.deleteTask(currnetState); //inform parent about current state
		});
	}
	handleChange = (e) =>{
		const currnetState = this.state.inputProps;
		const key = e.target.dataset.key;
		const changeElement = currnetState.map(element => {
			return {
				Text: element.Text,
				done: (element.Text === key) ? !element.done:element.done,
			}
		});
		this.setState({inputProps: changeElement}, ()=>{
			localStorage.setItem('task', JSON.stringify(this.state.inputProps));
		});
	}
	render(){
		if(this.state.inputProps === null || this.state.inputProps.length === 0) return <h3>No any task to do!</h3>;
		return(
			<div>
				{this.state.inputProps.map((element,index) =>{
					const newTask = {
						itemText: element.Text,
						done: element.done,
						key: index,
					}
					return(
						<li key={newTask.key}>
							<input type="checkbox" id={'item'+newTask.itemText} data-key={newTask.itemText} checked={newTask.done} onChange={this.handleChange}/>
							<label htmlFor={'item'+newTask.itemText}>{newTask.itemText}</label>
							<button type="button" name="deleteThis" data-index={newTask.key} onClick={this.delete}>❌</button>
						</li>
					)
				})}
			</div>
		);
	}
}

export default ListItem;
