'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StaticField = function StaticField(_ref) {
	var id = _ref.id,
	    label = _ref.label,
	    help = _ref.help,
	    data = _ref.data,
	    validationState = _ref.validationState,
	    staticMessage = _ref.staticMessage,
	    props = _objectWithoutProperties(_ref, ['id', 'label', 'help', 'data', 'validationState', 'staticMessage']);

	var style = {};
	if (validationState === 'error') style = { color: '#a94442' };

	return _react2.default.createElement(
		_reactBootstrap.FormGroup,
		{ controlId: id, validationState: validationState },
		_react2.default.createElement(
			_reactBootstrap.ControlLabel,
			null,
			label
		),
		_react2.default.createElement(
			_reactBootstrap.FormControl.Static,
			{ style: style },
			staticMessage
		),
		help && _react2.default.createElement(
			_reactBootstrap.HelpBlock,
			null,
			help
		)
	);
};

module.exports = StaticField;