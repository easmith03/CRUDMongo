import React, { Component } from 'react';
import logo from './logo.svg';
import './CommentBox.css';
import Comment from './Comment';

export default class CommentBox extends Component {
	
	constructor() {
		super();
		this.state = {
				showComments: false
		};
	}
	
	render() {
		
	let comments;  
		  
	let buttonText = "Show Comments"; 
	if (this.state.showComments) {
		comments = this._getComments();  
		buttonText = "Hide Comments";
	}
	
    return (
    	<div className="CommentBox">
    		<h4 className="CommentBox-header">{this._getCommentsTitle(comments)}</h4>
    		<button onClick={this._handleClick.bind(this)}>{buttonText}</button>
    	
    		<div >
    			{comments}
    			</div>
		</div>
    );
  }
  
  _getComments() {
	  const data = [{author: "Big Guy", body: "I am a big guy!"}, {author: "Little Guy", body: "I don't like the big guy!"}, {author: "Steve Harvey", body: "I am a rich guy!"}]
	  
	  return data.map(d => {
		return (<Comment body={d.body} author={d.author} />);  
	  });
  }
  
  _getCommentsTitle(l) {
	if (!l || l.length === 0) {
		return "No Comments";
	} else if (l.length === 1) {
		return "1 Comment";
	} else { 
		return `${l.length} Comments`;
  	}	  
  }
  
  _handleClick() {
	  this.setState({showComments: !this.state.showComments});
  }
}
