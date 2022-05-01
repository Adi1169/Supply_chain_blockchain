import React from 'react'
import { useState ,useEffect} from 'react';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import Request_Transaction from './RequestTransaction';
import Requested_Transaction from './Requested_Transaction';
import Received_Request from './Received_Request';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Transactions from './Transactions';
const Navbar = (props) => {
    const [Password, setPassword] = useState('');
    const [Company, setCompany] = useState('');
    return (
        <div>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
      <nav className="navbar navbar-dark  bg-dark shadow mb-5">
        <p className="navbar-brand my-auto">
         Supply Management
        </p>
        <ul className="nav justify-content-end">
  <li className="nav-item">
    
    <Link to="/Request_Transaction" className="nav-link">Request Transaction </Link>
  </li>
  <li className="nav-item">
   
    <Link to="/Requested_Transaction" className="nav-link">Requested Transaction</Link>
  </li>

  
  
  <li className="nav-item">
   
    <Link to="/Received_Request" className="nav-link">Received Request</Link>
  </li>
   
  <li className="nav-item">
   
    <Link to="/Transactions" className="nav-link">Transactions</Link>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="Transactions">{props.Address}</a>
  </li>
</ul>
        
    </nav>
   
      <Route path="/Transactions" component={Transactions}></Route>
      <Route path="/Request_Transaction" component={Request_Transaction}></Route>
      <Route path="/Requested_Transaction" component={Requested_Transaction}></Route>
      <Route path="/Received_Request" component={Received_Request}></Route>
    {/*
   <div id="Request_Transaction">
       <Request_Transaction/>
   </div>
   <div id="Requested_Transaction">
       <Requested_Transaction/>
   </div>
   <div id="Received_Request">
       <Received_Request/>
   </div>
   <div id="Transactions">
       <Transactions/>
   </div>
*/}
        </div>

    )
}

export default Navbar
