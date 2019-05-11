import React, {Component} from 'react';

export default class ToStep extends Component{
  render(){
    const {onAction} = this.props;
    const toStepProp = this.props.wizardContext.toStepProp
    return(
      <div>
        <p>enter address</p>
        <input
          placeholder="name"
          type="text"
          value={toStepProp.name}
          />
      </div>
    )
  }
}

ToStep.defaultProps ={
  wizardContext: {},
  onAction: () => {}
};
