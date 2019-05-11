import React, {Component} from 'react';

export default class FromStep extends Component{
  render(){
    const {onAction} = this.props;
    return(
      <div>
        <p>name</p>
        <input
          type='text'
          data-step='from'
          data-id='name'
          onChange={onAction}
          value={this.props.wizardContext.from.name}
          />
      </div>
    )
  }
}
