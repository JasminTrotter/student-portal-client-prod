import React from 'react';
import {connect} from 'react-redux';
import {setProduct, setClassAmount, setDollarAmount, setDate} from '../actions/product-selection';
var moment = require('moment');


export class ProductSelectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			dollarAmount: '',
			classAmount: '',
			date: new moment().format("MMM Do YYYY")
		}
	}


	onSubmit(e, value) {
		e.preventDefault();
		this.props.dispatch(setProduct(this.state.value));
		this.props.dispatch(setClassAmount(this.state.classAmount));
		this.props.dispatch(setDollarAmount(this.state.dollarAmount));
		this.props.dispatch(setDate(this.state.date));
		this.props.history.push('/payment');
		
    }
    render() {

		return (
			<div className="product-select-form">
			  <h3 className="panel-header">Select a Package</h3>
		      <form onSubmit={(e, value) =>
	                    this.onSubmit(e, value)
	                }>
		      <fieldset>
		        	<div className="product-select-input">
		        		<label>
		                <input
		                   	required={true}
		                    type="radio"
		                    name="price"
		                    label="8 Classes - $170"
		                    value={170}
		                    onChange={(event) => this.setState({ value: 17000, dollarAmount: '170', classAmount: '8 classes'})}
		                />
		                8 Classes - $170</label>
	                </div>
	             	
	            
		        	<div className="product-select-input">
		        		<label>
		                <input
		                	
		               		required={true}
		                    type="radio"
		                    name="price"
		                    label="4 Classes - $92"
		                    value={92}
		                    onChange={(event) => this.setState({ value: 9200, dollarAmount: '92', classAmount: '4 classes'})}
		                />
	                	4 Classes - $92</label>
	                </div>

					<div className="product-select-input">
						<label>
		                <input
		                	
		                  	required={true}
		                    type="radio"
		                    name="price"
		                    label="2 Classes - $48"
		                    value={48}
		                    onChange={(event) => this.setState({ value: 4800, dollarAmount: '48', classAmount: '2 classes'})}

		                />
	                	2 Classes - $48</label>
	                </div>

	                <div className="product-select-input">
	                	<label>
		                <input

		                 	required={true}
		                    type="radio"
		                    name="price"
		                    label="1 Class - $25"
		                    value={25}
		                    onChange={(event) => this.setState({ value: 2500, dollarAmount: '25', classAmount: '1 class' })}
		                />
		                1 Class - $25</label>
	                </div>

		        <button type="submit">Submit</button>
		      </fieldset>
		      </form>
		    </div>
		);
	}
}

export default connect()(ProductSelectForm);
