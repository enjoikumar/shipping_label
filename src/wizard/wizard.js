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
      showConfirm: false,
      compState: 1
    };

    this.handleState = this.handleState.bind(this);
    this.handleNested = this.handleNested.bind(this);
    this.confirm = this.confirm.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  checkNavState(next){
    if (next < 2){
      this.setState({
        showPreviousButton: false
      });
    }
  }

  next(){
    this.setState((prevState, props) => {
      return{
        compState: prevState.compState + 1,
        showPreviousButton: true,
        showNextButton: prevState.compState + 1 === props.steps.length ? false : true
      };
    });
  }

  previous(){
    if(this.state.compState > 1){
      this.setState({
        compState: this.state.compState - 1,
        showNextButton: true
      });
    }
    this.checkNavState(this.state.compState - 1);
  }

  handleState(event){
    const key = event.target.getAttribute('data-id')
    const value = event.target.value;

    this.setState({
      wizardContext: { ...this.state.wizardContext, [key]: value }
    });
  }

  handleNested(event){
    const key = event.target.getAttribute('data-id');
    const stage = event.target.getAttribute('data-step');
    const value = event.target.value

    this.setState(prevState => ({
      ...prevState,
      wizardContext:{
        ...prevState.wizardContext,
        [stage]: {
          ...prevState.wizardContext[stage],
          [key]: value
        }
      }
    }));
  }

  confirm(val){
    this.props.onComplete(val);
  }

  render(){
    const Header = this.props.header;
    return(
      <div>
        <Header />
        {React.cloneElement(this.props.steps[this.state.compState - 1], {
          onAction: this[
            this.props.steps[this.state.compState -1].props.onAction
          ],
          wizardContext: this.state.wizardContext
        })}
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
