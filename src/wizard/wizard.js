import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Wizard extends Component{
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
