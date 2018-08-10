import React, { Component } from 'react';

class ListItem extends Component{
	remove(e){
		console.log(e.target);
	}
	render(){
		return(
			<div>
				<p>List of task</p>
				{this.props.passedVal.map((task) =>{
					return <p key={task}>{task}<button type="button" onClick={this.remove.bind(this)}>df</button></p>
				})}
			</div>
		);
	}
}

export default ListItem;