import React, {Component} from 'react';

export default class WeightStep extends Component{
  render(){
    const {onAction} = this.props;
    const {weight} = this.props.wizardContext;
    return(
      <div>
        <p>weight</p>
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
