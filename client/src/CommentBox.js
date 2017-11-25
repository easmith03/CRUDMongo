import React, { Component } from 'react';
import logo from './logo.svg';
import './CommentBox.css';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default class CommentBox extends Component {
	
	constructor() {
		super();
		this.state = {
				showComments: false,
				comments: [{author: "Big Guy", body: "I am a big guy!"}, {author: "Little Guy", body: "I don't like the big guy!"}, {author: "Steve Harvey", body: "I am a rich guy!"}]
		};
	}
	
	render() {
		
	let commentDisplay;	
	let comments = this._getComments();
	let buttonText = "Show Comments"; 
	if (this.state.showComments) { 
		commentDisplay = comments;
		buttonText = "Hide Comments";
	}
	
    return (
    	<div className="CommentBox">
    		<CommentForm addComment={this._addComment.bind(this)} />
    		<h4 className="CommentBox-header">{this._getCommentsTitle(comments.length)}</h4>
    		<button onClick={this._handleClick.bind(this)}>{buttonText}</button>
    	
    		<div >
    			{commentDisplay}
    			</div>
		</div>
    );
  }
  
  _getComments() {
	  return this.state.comments.map(d => {
		return (<Comment body={d.body} author={d.author} />);  
	  });
  }
  
  _getCommentsTitle(l) {
	if (l === 0) {
		return "No Comments";
	} else if (l === 1) {
		return "1 Comment";
	} else { 
		return `${l} Comments`;
  	}	  
  }
  
  _handleClick() {
	  this.setState({showComments: !this.state.showComments});
  }
  
  _addComment(author, body) {
	  const comment = {
	     id: this.state.comments.length + 1,
	     author: author,
	     body: body
	  };
	  this.setState({comments: this.state.comments.concat([comment])});
  }
}
