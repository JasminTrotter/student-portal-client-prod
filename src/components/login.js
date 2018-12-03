import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from './login-form';
import '../styles/login.css';
import Dashboard from './dashboard';
import {connect} from 'react-redux';

export function Login(props) {
   const authToken = localStorage.getItem('authToken');

   if (authToken) {
   		return <Dashboard />
   	}
   	else {
	    return (
	    	<div>
		        <section className="sign-in">
		            <h2>Sign In</h2>
		            <LoginForm history={props.history}/>
		            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>

		        </section>
	        
	        </div>
	    );

		
	}

}

export default connect()(Login)

