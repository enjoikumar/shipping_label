import React, {Component} from 'react';

export default class WeightStep extends Component{
  render(){
    const {onAction} = this.props;
    const {weight} = this.props.wizardContext;
    return(
      <div className="weight">
        <p>How much does the package Weigh</p>
        <p>(Please use numbers only)</p>
        <input
          placeholder="weight"
          type="text"
          data-id="weight"
          onChange={onAction}
          value={weight}
          />
      </div>
    );
  }
}
