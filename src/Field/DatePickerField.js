import React from 'react';
import {FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import {getSelected, getValue, handleOnChange} from './helpers'
require('react-datepicker/dist/react-datepicker.css');
require('./../../css/overrides.css');

const DatePickerField = ({ id, label, help, data, source, afterUpdate, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <br/>
      <DatePicker
          id={id}
          className = 'form-control'
          locale={'it'}
          isClearable={true}
          selected={getSelected(getValue(data, source))}
          onChange={date => handleOnChange(data, source, date , afterUpdate)}
          {...props}
          />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>    
    )
}

module.exports= DatePickerField