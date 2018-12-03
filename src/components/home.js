import React from 'react';
import {connect} from 'react-redux';

export function Home(props) {
    
	return (


		<div className="homePage">
			<section className="about-us">
      			<h2>About Us</h2>
      			<p><a href="https://balletbodybyjasmin.com" target="_blank" rel="noopener noreferrer">Ballet Body by Jasmin</a> is an adult ballet program for absolute beginners. Create an account <a onClick={() => props.history.push('/signup')}>here</a> to purchase a class or a package of multiple classes. You will also be able to view a history of your purchases on your dashboard. See you in class!</p>
    		</section>
    		
		</div>
	);
} 

export default connect()(Home);