import React, {Component} from 'react';

import PropTypes from 'prop-types';
import Navigation from '../assets/nav.js';


export default class Wizard extends Component{
  constructor(props){
    super(props);
    this.state={
      wizardContext: this.props.wizardContext,
      showNavigation: true,
      showPreviousButton: false,
      showNextButton: true,
      showConfirm: false
    };

    this.handleState = this.handleState.bind(this);
  }

  handleState(event) {
    const key = event.target.getAttribute('data-id')
    const value = event.target.value;

    this.setState({
      wizardContext: { ...this.state.wizardContext, [key]: value }
    });
  }

  render(){
    return(
      <div>
        in the wizard

        <Navigation
          showPrevious={this.state.showPreviousButton}
          showNext={this.state.showNextButton}
          next={this.next}
          previous={this.previous}
          showNavigation={this.showNavigation}
           />
      </div>
    )
  }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};
