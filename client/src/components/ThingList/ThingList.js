import React, { Component } from 'react';
import './ThingList.css';

class ThingList extends Component {
    
    constructor() {
        super();
        this.state = {
            things: []
        };
    }

    
   render() {
       
       let thingsDisplayList = this._getThingsDisplayList();
   
       return (
    	  <div className="main" id="main">
			<h2>Crud List of Things</h2>
            	<hr/>
               {thingsDisplayList}
            	
          </div>
      );
   }
   
   componentDidMount() {
       console.log("component did mount");
       let thingComponent = this;
       fetch("http://localhost:3000/thing", {
           cache: 'default',
           method: 'GET'
       })
       .then(function (response) {
           console.log(response);
           return response.json();
       })
      .then(function (data) {
          console.log("Get List arrary response:", data);
          thingComponent.setState({things: data});
          return data;
       });

   }
   
   _getThingsDisplayList() {
       return this.state.things.map(d => {
         return (<div> <button onClick={this._handleDelete.bind(this, d._id)}>Delete</button> -: {d.title} - {d.field1} - {d.field2} - {d.message} </div>);  
       });
   }

   _handleDelete(bId) {
       console.log("Delete1", bId);
       //TODO: Mongo delete
   }

}
export default ThingList;