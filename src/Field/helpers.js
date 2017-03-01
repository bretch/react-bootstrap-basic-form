const moment = require('moment');

export const getSelected = (value)=> {
  if(value)
    return moment(value)

  return null
}

export const getValue = (data, source) => {
  if(Array.isArray(source))
    return data.getIn(source)

  return data.get(source)
}

export const handleOnChange = (data, source, value, afterUpdate, onChange) => {
    if(Array.isArray(source)){
      data = data.setIn(source, value)
    }else{
      data = data.set(source, value)
    }      
    afterUpdate(data)
    if(onChange)
      onChange(value, data, afterUpdate)
}