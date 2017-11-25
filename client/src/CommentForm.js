import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class CommentForm extends Component {
  render() {
    return (
		<form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
			<label>Join the discussion</label>
			<div className="comment-form-fields">
			    <div>
				<input placeholder="Name" ref={(input) => this._author = input} />
			    </div>
			    <div>
				<textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}></textarea>	
			    </div>
			</div>
			<div className="comment-form-actions">
				<button type="submit">
					Post comment
				</button>
			</div>
		</form>
    );
  }
  
  _handleSubmit(event) {
	  event.preventDefault();
	  
	  this.props.addComment(this._author.value, this._body.value);
  }
}
