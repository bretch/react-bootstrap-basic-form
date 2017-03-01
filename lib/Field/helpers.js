'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var moment = require('moment');

var getSelected = exports.getSelected = function getSelected(value) {
  if (value) return moment(value);

  return null;
};

var getValue = exports.getValue = function getValue(data, source) {
  if (Array.isArray(source)) return data.getIn(source);

  return data.get(source);
};

var handleOnChange = exports.handleOnChange = function handleOnChange(data, source, value, afterUpdate, onChange) {
  if (Array.isArray(source)) {
    data = data.setIn(source, value);
  } else {
    data = data.set(source, value);
  }
  afterUpdate(data);
  if (onChange) onChange(value, data, afterUpdate);
};