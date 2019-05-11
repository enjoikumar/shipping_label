import React, {Component} from 'react';

export default class FromStep extends Component{
  render(){
    const {onAction} = this.props;
    return(
      <div>
        <p>To ship an item, please enter your address</p>
        <div>
          <input
            placeholder="Name"
            type='text'

            data-step='from'
            data-id='name'
            onChange={onAction}
            value={this.props.wizardContext.from.name}
            />
        </div>

        <div>
          <input
            placeholder="Street"
            type="text"

            data-step="from"
            data-id="street"
            onChange={onAction}
            value={this.props.wizardContext.from.street}
            />
        </div>

        <div>
          <input
            placeholder="City"
            type="text"

            data-step="from"
            data-id="city"
            onChange={onAction}
            value={this.props.wizardContext.from.city}
            />
        </div>

        <div>
          <input
            placeholder="State"
            type="text"

            data-step="from"
            data-id="state"
            onChange={onAction}
            value={this.props.wizardContext.from.state}
            />
        </div>

        <div>
          <input
            placeholder="Zip Code"
            type="text"

            data-step="from"
            data-id="zip"
            onChange={onAction}
            value={this.props.wizardContext.from.zip}
            />
        </div>

      </div>
    )
  }
}
