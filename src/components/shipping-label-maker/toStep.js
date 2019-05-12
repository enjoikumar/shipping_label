import React, {Component} from 'react';

export default class ToStep extends Component{
  render(){
    const {onAction} = this.props;
    const to = this.props.wizardContext.to;
    return(
      <div className="box">
        <p>Enter destination address</p>

        <div className="lineContent">
          <label>Name</label>
          <input
            placeholder="name"
            type="text"

            data-id="name"
            data-step="to"
            onChange={onAction}
            value={to.name}
            />
        </div>

        <div className="lineContent">
          <label>Street</label>
          <input
            placeholder="Street"
            type="text"

            data-id="street"
            data-step="to"
            onChange={onAction}
            value={to.street}
            />
        </div>

        <div className="lineContent">
          <label>City</label>
          <input
            placeholder="City"
            type="text"

            data-id="city"
            data-step="to"
            onChange={onAction}
            value={to.city}
            />
        </div>

        <div className="lineContent">
          <label>State</label>
          <input
            placeholder="State"
            type="text"

            data-id="state"
            data-step="to"
            onChange={onAction}
            value={to.state}
            />
        </div>

        <div className="lineContent">
          <label>Zip code</label>
          <input
            placeholder="Zip Code"
            type="text"

            data-id="zip"
            data-step="to"
            onChange={onAction}
            value={to.Zip}
            />
        </div>
      </div>
    )
  }
}

ToStep.defaultProps ={
  wizardContext: {},
  onAction: () => {}
};
