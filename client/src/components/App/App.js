import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import ThingForm from '../ThingForm/ThingForm';
import ThingList from '../ThingList/ThingList';
import ThingDetail from '../ThingDetail/ThingDetail';
import './App.css';

class App extends Component {
    render() {
	   
        return (
            <Router>
                <div>   	              
    	            <div className="sidenav">
    	                <div>
    	                    <div><Link to={'/'}>Home</Link></div>
    	            		<div><Link to={'/Login'}>Login</Link></div>
    	            		<div><Link to={'/ThingList'}>List of Things</Link></div>
    	            		<div><Link to={'/ThingForm'}>Add new Thing</Link></div>
    	            	</div>
    	          	</div>
    	             	                 
    	            <Switch>
    	            	<Route exact path='/' component={Home} />
    	                <Route exact path='/Login' component={Login} />
                        <Route exact path='/ThingList' component={ThingList} />
                        <Route exact path='/Thing/:id' component={ThingDetail} />
                        <Route exact path='/ThingForm' component={ThingForm} />
    	            </Switch>
    	       	</div>
    	    </Router>

      );
   }
	
}
export default App;