import React, {Component} from 'react';

export default class ShippingStep extends Component{
  render(){
    const {onAction} = this.props;
    const {shippingOption} = this.props;

    return(
      <div>
        <p>choose your shipping option</p>
        <div>
          <select
            onChange={onAction}
            value={shippingOption}
            >
            <option defaultValue value="1">Ground</option>
            <option value="2">Express</option>
          </select>
        </div>
      </div>
    )
  }
}
