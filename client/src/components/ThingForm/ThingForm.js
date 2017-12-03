import React, { Component } from 'react';
import './ThingForm.css';

class ThingForm extends Component {
    render() {
        return (
            <div className="main" id="main">
			<h2>Create a new Thing</h2>
            <hr/>

            <form className="thing-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Add a new Thing</label>
                <div className="thing-form-fields">
                    <div>
                        <input placeholder="Title" ref={(input) => this._title = input} />
                    </div>
                        <div>
                        <input placeholder="Field1" ref={(input) => this._field1 = input} />
                    </div>
                        <div>
                        <input placeholder="Field2" ref={(input) => this._field2 = input} />
                    </div>
                    <div>
                        <textarea placeholder="Message:" ref={(textarea) => this._message = textarea}></textarea>  
                    </div>
                </div>
                <div className="thing-form-actions">
                    <button type="submit">
                        Save Thing
                    </button>
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
           alert("Saved: ", response.status);
           return response.json();
       })
      .then(function (data) {
          console.log("post response:", data);
          return data;
       });

   }
   

}
export default ThingForm;