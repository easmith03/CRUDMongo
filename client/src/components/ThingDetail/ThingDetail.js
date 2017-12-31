import React, { Component } from 'react';
import './ThingDetail.css';

class ThingDetail extends Component {
    
    constructor() {
        super();
        this.state = {
            thing: {}
        };
    }

    
   render() {
       
       let thingDisplay = this._getThingDisplay();
   
       return (
          <div className="main" id="main">
            <h2>One Thing</h2>
                <hr/>
                   <div className="rTable">
                   <div className="rTableRow">
                   <div className="rTableHead rTableHeading"></div>
                   <div className="rTableHead rTableHeading"></div>
                   </div>
              {thingDisplay}
                </div>              
          </div>
      );
   }
     
   componentDidMount() {
       console.log("component did mount", this.props.match.params.id);
       let thingComponent = this;
       fetch("http://localhost:3000/thing/" + this.props.match.params.id, {
           cache: 'default',
           method: 'GET'
       })
       .then(function (response) {
           console.log(response);
           return response.json();
       })
      .then(function (data) {
          console.log("Get List arrary response:", data);
          thingComponent.setState({thing: data});
          return data;
       });

   }
   
   _getThingDisplay() {
       return (<div><div className="rTableRow">
           <div className="rTableCell">Title</div>
           <div className="rTableCell">{this.state.thing.title}</div>
           </div>
           <div className="rTableRow">
           <div className="rTableCell">field 1</div>
           <div className="rTableCell">{this.state.thing.field1}</div>
           </div>
           <div className="rTableRow">
           <div className="rTableCell">field 2</div>
           <div className="rTableCell">{this.state.thing.field2}</div>
           </div>
           <div className="rTableRow">
           <div className="rTableCell">Message</div>
           <div className="rTableCell">{this.state.thing.message}</div>
           </div></div>
      );  

   }

 
}
export default ThingDetail;