import React from 'react';
import DatePickerField from './DatePickerField'
import DefaultField from './DefaultField'
import SelectField from './SelectField'
import StaticField from './StaticField'

const catchMissingProps = (props) => {
  let newProps = {...props}
  if(!props.source){
    if(props.id)
      newProps.source = props.id
    else if(props.id)
      newProps.source = props.name
  }

  if(!props.type)
    newProps.type='text'

  return newProps    
}

const Field = (props) => {
  props = catchMissingProps(props)
  let field;

  switch(props.type){
    case 'datepicker':
      field = <DatePickerField {...props}/>;
      break;
    case 'select':
      field = <SelectField {...props}/>;
      break;
    case 'static':
      field = <StaticField {...props}/>;
      break;
    default: 
      field = <DefaultField {...props}/>;
      break;
  }
  return <div className={props.wrapperClassName}>{field}</div>
}

Field.displayName = 'Field'

module.exports= Field