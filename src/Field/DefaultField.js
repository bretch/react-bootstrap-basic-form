import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import {getValue, handleOnChange} from './helpers'

const DefaultField = ({ id, label, help, type, data, source, afterUpdate, validationState, ...props }) => {

  return (
    <FormGroup controlId={id} validationState={validationState}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} 
        value={getValue(data, source)} 
        onChange={e=> handleOnChange(data, source, e.target.value, afterUpdate, props.onChange)}
        />      
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

module.exports= DefaultField