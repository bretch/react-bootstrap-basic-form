'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePickerField = require('./DatePickerField');

var _DatePickerField2 = _interopRequireDefault(_DatePickerField);

var _DefaultField = require('./DefaultField');

var _DefaultField2 = _interopRequireDefault(_DefaultField);

var _SelectField = require('./SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _StaticField = require('./StaticField');

var _StaticField2 = _interopRequireDefault(_StaticField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var catchMissingProps = function catchMissingProps(props) {
  var newProps = _extends({}, props);
  if (!props.source) {
    if (props.id) newProps.source = props.id;else if (props.id) newProps.source = props.name;
  }

  if (!props.type) newProps.type = 'text';

  return newProps;
};

var Field = function Field(props) {
  props = catchMissingProps(props);
  var field = void 0;

  switch (props.type) {
    case 'datepicker':
      field = _react2.default.createElement(_DatePickerField2.default, props);
      break;
    case 'select':
      field = _react2.default.createElement(_SelectField2.default, props);
      break;
    case 'static':
      field = _react2.default.createElement(_StaticField2.default, props);
      break;
    default:
      field = _react2.default.createElement(_DefaultField2.default, props);
      break;
  }
  return _react2.default.createElement(
    'div',
    { className: props.wrapperClassName },
    field
  );
};

Field.displayName = 'Field';

module.exports = Field;