'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DefaultField = function DefaultField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      help = _ref.help,
      type = _ref.type,
      data = _ref.data,
      source = _ref.source,
      afterUpdate = _ref.afterUpdate,
      validationState = _ref.validationState,
      props = _objectWithoutProperties(_ref, ['id', 'label', 'help', 'type', 'data', 'source', 'afterUpdate', 'validationState']);

  return _react2.default.createElement(
    _reactBootstrap.FormGroup,
    { controlId: id, validationState: validationState },
    _react2.default.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label
    ),
    _react2.default.createElement(_reactBootstrap.FormControl, _extends({}, props, {
      value: (0, _helpers.getValue)(data, source),
      onChange: function onChange(e) {
        return (0, _helpers.handleOnChange)(data, source, e.target.value, afterUpdate, props.onChange);
      }
    })),
    help && _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      null,
      help
    )
  );
};

module.exports = DefaultField;