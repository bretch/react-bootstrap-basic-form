import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

const StaticField = ({ id, label, help, data, validationState, staticMessage, ...props }) => {
    let style={}
    if(validationState === 'error')
      style={color:'#a94442'};

	return (
		<FormGroup controlId={id} validationState={validationState}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl.Static style={style}>{staticMessage}</FormControl.Static>
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

module.exports= StaticField