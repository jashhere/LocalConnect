import React from 'react';
import './style.css'; // Import CSS file for styling

function PricingTable() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' ,fontSize: '2.5rem'}}>Subscription Plans</h1>
      

      <div className="columns">
        <ul className="price">
          <li className="header">Weekly</li>
          <li className="grey">99 Rs/ Weekly</li>
          <li>25-Grocery items Limit</li>
          <li>Spotlight Chance-Low</li>
          
          <li>Ease of Convienence</li>
          <li className="grey"><a href="http://localhost:3000/login" className="button">Sign Up</a></li>
        </ul>
      </div>

      <div className="columns">
        <ul className="price">
          <li className="header green">Monthly</li>
          <li className="grey">299 Rs / Monthly</li>
          <li>70-Grocery items Limit</li>
          <li>Spotlight Chance-Medium</li>
         
          <li>Ease of Convienence</li>
          <li className="grey" ><a href="http://localhost:3000/login" className="button">Sign Up</a></li>
        </ul>
      </div>

      <div className="columns">
        <ul className="price">
          <li className="header">Yearly</li>
          <li className="grey">999 Rs / Year</li>
          <li>1000-Grocery items Limit</li>
          <li>Spotlight Chance-High</li>
          
          <li>Ease of Convienence</li>
          <li className="grey"><a href="http://localhost:3000/login" className="button">Sign Up</a></li>
        </ul>
      </div>
    </div>
  );
}

export default PricingTable;
