import React, {Component} from 'react';

import {getShippingCost, getShippingRate} from '../assets/shipping-option.js';


export default class ShippingLabel extends Component{
  constructor(props){
    super(props);

    this.state = props.info;
  }
  render(){
    return(
      <div>
        <h3>This is your shipping label:</h3>
        <div>
          <p>{getShippingCost(this.state.shippingOption)}: Shipping</p>
        {' '}
          <p>${getShippingRate(
              this.state.weight,
              this.state.shippingOption
            )}</p>
        </div>

        <div>
          <h4>From</h4>
          <p>{this.state.from.name}</p>
          <p>{this.state.from.street}</p>
          <p>
            {this.state.from.city},{this.state.from.state}{' '}
            {this.state.from.zip}
          </p>
        </div>

        <div>
          <h4>To</h4>
            <p>{this.state.to.name}</p>
            <p>{this.state.to.street}</p>
            <p>
              {this.state.to.city},{this.state.to.state}{' '}
              {this.state.to.zip}
            </p>
        </div>
      </div>
    )
  }
}
