import React, {Component} from 'react';

export default class ToStep extends Component{
  render(){
    const {onAction} = this.props;
    const to = this.props.wizardContext.to
    return(
      <div>
        <p>Enter destination address</p>

        <div>
          <input
            placeholder="name"
            type="text"

            data-id="name"
            data-step="to"
            value={to.name}
            />
        </div>

        <div>
          <input
            placeholder="Street"
            type="text"

            data-id="street"
            data-step="to"
            value={to.name}
            />
        </div>

        <div>
          <input
            placeholder="City"
            type="text"

            data-id="city"
            data-step="to"
            value={to.name}
            />
        </div>

        <div>
          <input
            placeholder="State"
            type="text"

            data-id="state"
            data-step="to"
            value={to.name}
            />
        </div>

        <div>
          <input
            placeholder="Zip Code"
            type="text"

            data-id="zip"
            data-step="to"
            value={to.name}
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
