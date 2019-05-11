import React, {Component} from 'react';

const hidden={
  display: 'block'
};

const Navigation = props => (
  <div style={props.show ? {} : hidden}>
    <button
      style={props.showPrevious ? {} : hidden}
      onClick={props.previous}
      >Previous</button>

      <button
        style={props.showNext ? {} : hidden}
        onClick={props.next}
        >Next</button>
  </div>
);

export default Navigation;
