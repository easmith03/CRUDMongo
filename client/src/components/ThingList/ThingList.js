import React, { Component } from 'react';
import './ThingList.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


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
            	   <div className="rTable">
            	   <div className="rTableRow">
            	   <div className="rTableHead rTableHeading dataCell"><strong>title</strong></div>
            	   <div className="rTableHead rTableHeading">&nbsp;</div>
                   </div>
              {thingsDisplayList}
                </div>            	
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
         return (<div className="rTableRow">
                 <div className="rTableCell dataCell">{d.title}</div>
                 <div className="rTableCell"><Link to={'/thing/' + d._id}>Details</Link></div>
                 </div>
         );  
         //return (<div> <button onClick={this._handleDelete.bind(this, d._id)}>Delete</button> -: {d.title} - {d.field1} - {d.field2} - {d.message} </div>);  
       });
   }

   _handleDelete(bId) {
       console.log("Delete1", bId);
       //TODO: Mongo delete
   }

}
export default ThingList;