import React, { PropTypes, Component } from 'react';
import Immutable from 'immutable';

var SimpleForm = React.createClass({
  displayName: 'SimpleForm',

  getInitialState() {
    let data= Immutable.fromJS({})
    if(this.props.data)
      data = Immutable.fromJS(this.props.data)

    return {
      data: data,
    };
  },

  afterUpdate(data){
    this.setState({data})
    this.forceUpdate()
  },

  handleOnSubmit(e){
    e.preventDefault();
    const {onSubmit} = this.props
    if(onSubmit)
      onSubmit(this.state.data)
  },

  handleOnReset(e){
    e.preventDefault();
    this.afterUpdate(Immutable.fromJS({}))
  },

  render() {
    const {wrapperClassName} = this.props
    let children = React.Children.map(this.props.children, 
      child => {
        if(React.isValidElement(child) && child.type.displayName === 'Field'){
          return React.cloneElement(child, { 
                  data: this.state.data, 
                  afterUpdate: this.afterUpdate, 
                  ...child.props})              
        }
        return child
      })

    return (
      <div className={wrapperClassName}>
        <form onSubmit={this.handleOnSubmit} onReset={this.handleOnReset}>
          {children}
        </form>
      </div>
      )
  }
});

module.exports = SimpleForm;
