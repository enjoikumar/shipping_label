import React, {Component} from 'react';

import {getShippingCost, getShippingRate} from '../../assets/shipping-option.js';

export default class ConfirmStep extends Component{
  constructor(props){
    super(props);

    this.state = this.props.wizardContext;
    this.confirmationInfo = this.confirmationInfo.bind(this);
  }

  getToFrom(navi) {
    return Object.keys(this.state[navi]).map((val, i) => {
      return (
        <li key={i}>
          {' '}
          {val} : {this.state[navi][val]}{' '}
        </li>
      );
    });
  }

  getShippingOption(){
    return getShippingCost(this.state.shippingOption);
  }

  getShippingCost(){
    if(typeof parseFloat(this.state.weight) !== 'number') {
      return <h3>Please enter a number</h3>
    } return (
      <h3>
        {' '}
        {getShippingRate(this.state.weight, this.state.shippingOption)}{' '}
      </h3>
    );
  }

  confirmationInfo(){
    this.props.onAction(this.state);
  }

  render(){
    return(
      <div>
        <h2>Is this the correct information?</h2>
        <div>
          <h3>Your Information</h3>
          <p>{this.getToFrom('from')}</p>
          {' '}
          <h3>Deliveree's informtation</h3>
          <p>{this.getToFrom('to')}</p>
          {' '}
          <p>Weight of package: {this.state.weight}</p>
          <p>Delivery Method: {this.getShippingOption()}</p>
          <p>Cost: {this.getShippingCost()}</p>

          <p>
            {' '}
            To Confirm <button onClick={this.confirmationInfo}>Confirm</button>
          </p>
        </div>
      </div>
    );
  }
}
