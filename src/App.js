import React, { Component } from 'react';
import Field from './Field'
import Immutable from 'immutable'
import SimpleForm from './SimpleForm'

export default class App extends Component {
  render() {
  	let data = Immutable.fromJS({})
    return (
		<SimpleForm onSubmit={(data)=>{console.log(data.toJS())}} wrapperClassName='col-lg-8 col-lg-offset-2'>
			<h4>Simple Form</h4>
	    	<Field staticMessage='This is a static message' type='static' wrapperClassName='col-lg-12'/>
	    	<Field id='name' label={'Name'} wrapperClassName='col-lg-6'/>
	    	<Field id='firstname' label={'First Name'} wrapperClassName='col-lg-6'/>
	    	<Field id='gender' type='select' label={'Gender'} wrapperClassName='col-lg-6' 
		    	options={[
		    		{value: 'm', label: 'M'}, 
		    		{value: 'f', label: 'F'}, 
		    		{value: 'u', label: 'Pink Fluffy Unicorn Dancing on Rainbows!'}
		    		]}
		    		/>
	    	<Field id='birthdate' label={'Birth Date'} type='datepicker' wrapperClassName='col-lg-6'/>
	    	<br/>
	    	<div className='pull-right'>
		    	<button className='btn btn-primary' type='submit'>Submit</button>
		    	<button className='btn btn-danger' type='reset'>Reset</button>
	    	</div>
    	</SimpleForm>
    );
  }
}
