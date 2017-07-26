import React from 'react';

const Section = (props) => {
  return (
    <div className="section-container">
      <h5> {props.header} </h5>
      <p> {props.content} </p>
    </div>
  )
}

export default Section;
