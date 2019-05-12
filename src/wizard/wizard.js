import React, {Component} from 'react';

import PropTypes from 'prop-types';
import Navigation from '../assets/nav.js';


export default class Wizard extends Component{
  constructor(props){
    super(props);
    this.state={
      wizardContext: this.props.wizardContext,
      showNavigation: true,
      showConfirm: false,
      compState: 1
    };

    this.handleState = this.handleState.bind(this);
    this.handleNested = this.handleNested.bind(this);
    this.confirm = this.confirm.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  //figuring out the comp state so that when the number will turn 0 nothing happens
  next(){
    this.setState((prevState, props) => {
      return{
        compState: prevState.compState + 1,
      };
    });
  }

  previous(){
    if(this.state.compState > 1){
      this.setState({
        compState: this.state.compState - 1,
      });
    }
  }

  //bind the values of the inputs to the states
  handleState(event){
    const key = event.target.getAttribute('data-id')
    const value = event.target.value;

    this.setState({
      wizardContext: { ...this.state.wizardContext, [key]: value }
    });
  }

  //same thing but making sure they're on the right page/data-step
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
        //basically having the original props with new props merging in slowly using
        //Compstate to make sure there isnt an error
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
