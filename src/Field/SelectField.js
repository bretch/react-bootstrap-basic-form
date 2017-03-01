import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import Select from 'react-select'
import {getValue, handleOnChange} from './helpers'

const SelectField = ({ id, label, help, type, data, source, afterUpdate, validationState, ...props }) => {
	let formControl;

	if(props.options.length === 0)
		formControl = <Select name={id} placeholder={props.placeholder || '...loading data'} disabled/>
	else
		formControl = <Select name={id} {...props} 
						value={getValue(data, source)} 
						onChange={value=>handleOnChange(data, source, value, afterUpdate, props.onChange)}
						/>

	return (
		<FormGroup controlId={id} validationState={validationState}>
			<ControlLabel>{label}</ControlLabel>
			{formControl}
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

module.exports= SelectField