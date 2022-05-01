import React from 'react'
import { useState ,useEffect} from 'react';
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
const greeterAddress = "0x59b670e9fA9D0A427751Af201D676719a970857b"
const Request_Transaction = (props) => {
    const [Password, setPassword] = useState('');
    const [Company, setCompany] = useState('');
    const [Amount, setAmount] = useState('');
    const [PartnerB,setPartnerB]=useState('');
    const [Bond,setBond]= useState('');
    async function SubmitLogin(e){
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const val2 = await contract.MakeRequest(Amount,PartnerB,Bond,"Pending");

    await val2.wait();
    const requested= await contract.RequestedTransaction();
    alert(requested);
    
    }
    return (
       
 <div className="container ">
   <div className="input-group flex-nowrap">
  <div className="input-group-prepend">
    <span className="input-group-text" id="addon-wrapping">Address of PartyA</span>
  </div>
  <input type="digit" className="form-control" id="exampleInputPassword1" placeholder=""
    readonly/>
</div>
   <div className="input-group flex-nowrap">
  <div className="input-group-prepend">
    <span className="input-group-text" id="addon-wrapping">Address of PartyB</span>
  </div>
  <input className="form-control" type="text" placeholder="Address of Other Party"  onChange={(e)=>{
        setPartnerB(e.target.value);
    }}/>
</div>
<div className="input-group flex-nowrap">
  <div className="input-group-prepend">
    <span className="input-group-text" id="addon-wrapping">Company Name</span>
  </div>
  <input type="text" className="form-control" id="companyname" aria-describedby="Role" placeholder="Enter  Role" required
    onChange={(e)=>{
        setCompany(e.target.value);
    }}/>
</div>
<div className="input-group flex-nowrap">
  <div className="input-group-prepend">
    <span className="input-group-text" id="addon-wrapping">Write your Bond</span>
  </div>
  <input type="text" className="form-control" id="companyname" aria-describedby="companyname" placeholder="Write your bond here" required
    onChange={(e)=>{
        setBond(e.target.value);
    }}/>
</div>
<div className="input-group flex-nowrap">
  <div className="input-group-prepend">
    <span className="input-group-text" id="addon-wrapping">Amount</span>
  </div>
  <input type="digit" className="form-control" id="exampleInputPassword1" placeholder="Amount" 
    onChange={(e)=>{
        setAmount(e.target.value);
    }}/>
</div>

<button  className="btn btn-primary" onClick={SubmitLogin}>Submit</button>
 </div>
 
    );
}

export default Request_Transaction
