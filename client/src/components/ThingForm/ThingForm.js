import React, { Component } from 'react';
import './ThingForm.css';

class ThingForm extends Component {
    render() {
        return (
            <div className="main" id="main">
			<h2>Create a new Thing</h2>
            <hr/>

            <form className="thing-form" onSubmit={this._handleSubmit.bind(this)}>
                <div className="thingForm">
                        <label for="title">Title</label>
                        <input className="inputText" id="title" placeholder="Title" ref={(input) => this._title = input} />
                        <label for="field1">Field 1</label>
                        <input className="inputText" id="field1" placeholder="Field1" ref={(input) => this._field1 = input} />
                        <label for="field2">Field 1</label>
                        <input className="inputText" id="field2" placeholder="Field2" ref={(input) => this._field2 = input} />
                        <label for="message">Field 1</label>
                        <textarea className="inputText" id="message" placeholder="Message:" ref={(textarea) => this._message = textarea}></textarea>  
                        <input type="submit" className="inputSubmit" value="Save Thing"/> 
                </div>
            </form>
    	  </div>
      );
   }
       
    _handleSubmit(event) {
        event.preventDefault();
        const thing = {
               title: this._title.value,
               field1: this._field1.value, 
               field2: this._field2.value,
               message: this._message.value
       };
       
       console.log("save", thing);
       
       
       fetch("http://localhost:3000/thing", {
           //mode: 'cors',
           cache: 'default',
           method: 'POST',
           body: JSON.stringify(thing),
           //redirect: 'follow',
           headers: new Headers({
             'Content-Type': 'application/json'
           })
       })
       .then(function (response) {
           console.log(response);
           return response.json();
       })
      .then(function (data) {
          console.log("post response:", data);
          return data;
       });

   }

}
export default ThingForm;