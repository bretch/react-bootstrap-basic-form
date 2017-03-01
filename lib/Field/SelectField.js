'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SelectField = function SelectField(_ref) {
	var id = _ref.id,
	    label = _ref.label,
	    help = _ref.help,
	    type = _ref.type,
	    data = _ref.data,
	    source = _ref.source,
	    afterUpdate = _ref.afterUpdate,
	    validationState = _ref.validationState,
	    props = _objectWithoutProperties(_ref, ['id', 'label', 'help', 'type', 'data', 'source', 'afterUpdate', 'validationState']);

	var formControl = void 0;

	if (props.options.length === 0) formControl = _react2.default.createElement(_reactSelect2.default, { name: id, placeholder: props.placeholder || '...loading data', disabled: true });else formControl = _react2.default.createElement(_reactSelect2.default, _extends({ name: id }, props, {
		value: (0, _helpers.getValue)(data, source),
		onChange: function onChange(value) {
			return (0, _helpers.handleOnChange)(data, source, value, afterUpdate, props.onChange);
		}
	}));

	return _react2.default.createElement(
		_reactBootstrap.FormGroup,
		{ controlId: id, validationState: validationState },
		_react2.default.createElement(
			_reactBootstrap.ControlLabel,
			null,
			label
		),
		formControl,
		help && _react2.default.createElement(
			_reactBootstrap.HelpBlock,
			null,
			help
		)
	);
};

module.exports = SelectField;