import React from 'react'
import { ethers } from 'ethers'
import { useState ,useEffect} from 'react';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import Navbar from './Navbar';
const greeterAddress = "0x59b670e9fA9D0A427751Af201D676719a970857b"
const Login = (props) => {
    const [Password, setPassword] = useState('');
    const [Company, setCompany] = useState('');
    const [Role, setRole] = useState('');
    const [HaveAccount,setHaveAccount]= useState(false);
useEffect(async ()=>{
  const provider = new ethers.providers.Web3Provider(window.ethereum)
      const val = await provider.provider.selectedAddress;
      

      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
  const haveaccount= await contract.haveAccount();
    console.log("hbhawscjhB",haveaccount);
    setHaveAccount(haveaccount);
},[])

    async function SubmitLogin(e){
      console.log("scnnxzb");
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const val2 = await contract.AccountLogin(Role,Company,Password);

    await val2.wait();
    const haveaccount= await contract.haveAccount();
    console.log("ajncjJKBZS",haveaccount);
    setHaveAccount(haveaccount);
    
    }


    return (
        <div>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
      
    <form className="container card">
    <div className="form-group ">
    <label htmlFor="adress"> Address</label>
    <input className="form-control" type="text" placeholder="Readonly input here…" readOnly value={props.Address}/>
  
  </div>
  <div className="form-group ">
    <label htmlFor="exampleInputRole">Company Name</label>
    <input type="text" className="form-control" id="companyname" aria-describedby="Role" placeholder="Enter  Role"
    onChange={(e)=>{
        setCompany(e.target.value);
    }}/>
    
  </div>
  <div className="form-group ">
    <label htmlFor="exampleInputRole">Company Name</label>
    <input type="text" className="form-control" id="companyname" aria-describedby="companyname" placeholder="Enter Company Name"
    onChange={(e)=>{
        setRole(e.target.value);
    }}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
    onChange={(e)=>{
        setPassword(e.target.value);
    }}/>
    <small id="passwordhelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
  </div>
 
  <button  className="btn btn-primary" onClick={SubmitLogin}>Submit</button>
</form>

{
  (HaveAccount === true) ? <Navbar Address={props.Address}/> : <></>
}
        </div>
    )
}

export default Login
