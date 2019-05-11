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
  }

  render(){
    return(
      <div>
        in the wizard
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
