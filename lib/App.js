'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _SimpleForm = require('./SimpleForm');

var _SimpleForm2 = _interopRequireDefault(_SimpleForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
		_inherits(App, _Component);

		function App() {
				_classCallCheck(this, App);

				return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}

		_createClass(App, [{
				key: 'render',
				value: function render() {
						var data = _immutable2.default.fromJS({});
						return _react2.default.createElement(
								_SimpleForm2.default,
								{ onSubmit: function onSubmit(data) {
												console.log(data.toJS());
										}, wrapperClassName: 'col-lg-8 col-lg-offset-2' },
								_react2.default.createElement(
										'h4',
										null,
										'Simple Form'
								),
								_react2.default.createElement(_Field2.default, { staticMessage: 'This is a static message', type: 'static', wrapperClassName: 'col-lg-12' }),
								_react2.default.createElement(_Field2.default, { id: 'name', label: 'Name', wrapperClassName: 'col-lg-6' }),
								_react2.default.createElement(_Field2.default, { id: 'firstname', label: 'First Name', wrapperClassName: 'col-lg-6' }),
								_react2.default.createElement(_Field2.default, { id: 'gender', type: 'select', label: 'Gender', wrapperClassName: 'col-lg-6',
										options: [{ value: 'm', label: 'M' }, { value: 'f', label: 'F' }, { value: 'u', label: 'Pink Fluffy Unicorn Dancing on Rainbows!' }]
								}),
								_react2.default.createElement(_Field2.default, { id: 'birthdate', label: 'Birth Date', type: 'datepicker', wrapperClassName: 'col-lg-6' }),
								_react2.default.createElement('br', null),
								_react2.default.createElement(
										'div',
										{ className: 'pull-right' },
										_react2.default.createElement(
												'button',
												{ className: 'btn btn-primary', type: 'submit' },
												'Submit'
										),
										_react2.default.createElement(
												'button',
												{ className: 'btn btn-danger', type: 'reset' },
												'Reset'
										)
								)
						);
				}
		}]);

		return App;
}(_react.Component);

exports.default = App;