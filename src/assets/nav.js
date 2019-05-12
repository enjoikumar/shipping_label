import React from 'react';

const Navigation = props => (
  <div className="nav">
    <button onClick={props.previous}>Previous</button>

    <button onClick={props.next}>Next</button>
  </div>
);

export default Navigation;

//the navigational buttons. To go back and forth thru the pages
