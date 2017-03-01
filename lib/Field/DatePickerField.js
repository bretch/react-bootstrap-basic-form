'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

require('react-datepicker/dist/react-datepicker.css');
require('./../../css/overrides.css');

var DatePickerField = function DatePickerField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      help = _ref.help,
      data = _ref.data,
      source = _ref.source,
      afterUpdate = _ref.afterUpdate,
      props = _objectWithoutProperties(_ref, ['id', 'label', 'help', 'data', 'source', 'afterUpdate']);

  return _react2.default.createElement(
    _reactBootstrap.FormGroup,
    { controlId: id },
    _react2.default.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_reactDatepicker2.default, _extends({
      id: id,
      className: 'form-control',
      locale: 'it',
      isClearable: true,
      selected: (0, _helpers.getSelected)((0, _helpers.getValue)(data, source)),
      onChange: function onChange(date) {
        return (0, _helpers.handleOnChange)(data, source, date, afterUpdate);
      }
    }, props)),
    help && _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      null,
      help
    )
  );
};

module.exports = DatePickerField;