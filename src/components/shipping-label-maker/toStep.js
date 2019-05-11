import React, {Component} from 'react';

export default class ToStep extends Component{
  render(){
    const {onAction} = this.props;
    const to = this.props.wizardContext.to
    return(
      <div>
        <p>enter address</p>
        <input
          placeholder="name"
          type="text"
          data-id="name"
          data-step="toStepProp"
          value={to.name}
          />
      </div>
    )
  }
}

ToStep.defaultProps ={
  wizardContext: {},
  onAction: () => {}
};
