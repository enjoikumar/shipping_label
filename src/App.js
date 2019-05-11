import React,{Component} from 'react';

import Wizard from './wizard/wizard.js';
import CompleteForm from './components/shipping-label-maker/complete-form.js';
import ShippingLabel from './components/shipping-label.js';
import Header from './assets/header.js';
import ShippingLabelState from './assets/shipping-label-state.js';

import './App.css';

export default class ShippingLabelMaker extends Component{
  //state will be false, until the label is created and that info will be
  //binded to value
  constructor(props){
    super(props);
    this.state = {
      labelReady: false
    };
    this.createLabel = this.createLabel.bind(this);
  }

  createLabel(value) {
    this.setState({
      labelReady: true,
      info: value
    })
  }

  render() {
    return (
      //if the label is true then th info gets passed and it parses
      <div>
        {this.state.labelReady ? (<ShippingLabel info={this.state.info} />):
        (
          <Wizard
            Header={Header}
            CompleteForm={CompleteForm}
            wizardContext={ShippingLabelState}
            CompletedForm={this.createLabel}
            />
        )}
      </div>
    );
  }
}
