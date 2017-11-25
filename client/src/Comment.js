import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Comment extends Component {
  render() {
    return (
		<div >
		  <p >{this.props.author}</p>
		  <p >
		    {this.props.body}
		  </p>
		  <div>
		    <a href="#">Delete comment</a>
		  </div>
		</div>
    );
  }
}
