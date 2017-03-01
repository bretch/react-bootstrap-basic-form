'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicForm = _react2.default.createClass({
  displayName: 'BasicForm',

  getInitialState: function getInitialState() {
    var data = _immutable2.default.fromJS({});
    if (this.props.data) data = _immutable2.default.fromJS(this.props.data);

    return {
      data: data
    };
  },
  afterUpdate: function afterUpdate(data) {
    this.setState({ data: data });
    this.forceUpdate();
  },
  handleOnSubmit: function handleOnSubmit(e) {
    e.preventDefault();
    var onSubmit = this.props.onSubmit;

    if (onSubmit) onSubmit(this.state.data);
  },
  handleOnReset: function handleOnReset(e) {
    e.preventDefault();
    this.afterUpdate(_immutable2.default.fromJS({}));
  },
  render: function render() {
    var _this = this;

    var wrapperClassName = this.props.wrapperClassName;

    var children = _react2.default.Children.map(this.props.children, function (child) {
      if (_react2.default.isValidElement(child) && child.type.displayName === 'Field') {
        return _react2.default.cloneElement(child, _extends({
          data: _this.state.data,
          afterUpdate: _this.afterUpdate
        }, child.props));
      }
      return child;
    });

    return _react2.default.createElement(
      'div',
      { className: wrapperClassName },
      _react2.default.createElement(
        'form',
        { onSubmit: this.handleOnSubmit, onReset: this.handleOnReset },
        children
      )
    );
  }
});

module.exports = BasicForm;