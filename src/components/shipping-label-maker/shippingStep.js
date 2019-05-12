import React, {Component} from 'react';

export default class ShippingStep extends Component{
  render(){
    const {onAction} = this.props;
    const {shippingOption} = this.props;

    return(
      <div>
        <p>Choose your shipping option</p>
        <div>
          <select
            onChange={onAction}
            value={shippingOption}
            >
            <option defaultValue value="1">Ground</option>
          </select>
        </div>
      </div>
    )
  }
}
