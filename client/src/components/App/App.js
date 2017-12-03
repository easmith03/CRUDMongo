import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import ThingForm from '../ThingForm/ThingForm';
import ThingList from '../ThingList/ThingList';
import './App.css';

class App extends Component {
    render() {
	   
        return (
            <Router>
                <div>   	              
    	            <div className="sidenav">
    	                <ul>
    	                    <li><Link to={'/'}>Home</Link></li>
    	            		<li><Link to={'/Login'}>Login</Link></li>
    	            		<li><Link to={'/ThingList'}>List of Things</Link></li>
    	            		<li><Link to={'/ThingForm'}>Add new Thing</Link></li>
    	            	</ul>
    	          	</div>
    	             	                 
    	            <Switch>
    	            	<Route exact path='/' component={Home} />
    	                <Route exact path='/Login' component={Login} />
                        <Route exact path='/ThingList' component={ThingList} />
                        <Route exact path='/ThingForm' component={ThingForm} />
    	            </Switch>
    	       	</div>
    	    </Router>

      );
   }
	
}
export default App;