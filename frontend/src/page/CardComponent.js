import React from 'react';

// Define the CardComponent function accepting props as its parameter
function CardComponent(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.linkUrl} className="btn btn-primary">
          {props.linkText}
        </a>
      </div>
    </div>
  );
}

export default CardComponent;
