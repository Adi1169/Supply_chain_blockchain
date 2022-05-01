import React from 'react'
import { useState ,useEffect} from 'react';
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import { TransactionDescription } from 'ethers/lib/utils';
const greeterAddress = "0x59b670e9fA9D0A427751Af201D676719a970857b"
const Rreceived_Request = (props) => {
  const [transac, settransac] = useState([]);
  async function RequestedTransaction(){
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
  
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      const data = await contract.ReceivedTransaction();
      console.log(data,"sfjbjd")
      settransac(data)
         
  }
  useEffect(async() => {
    RequestedTransaction();
  
  },[])
//     const [Password, setPassword] = useState('');
//     const [Company, setCompany] = useState('');
//     const [Amount, setAmount] = useState('');
//     const [PartnerB,setPartnerB]=useState('');
//     const [Bond,setBond]= useState('');
//     async function SubmitLogin(e){
//         e.preventDefault();
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner()
//       const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
//       //const val2 = await contract.MakeRequest(Role,Company,Password);

//    // await val2.wait();
//     const haveaccount= await contract.haveAccount();
//     console.log(haveaccount);
    
//     }
//     return (
//         <div>
//               <div>
//               <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
      
//     <form className="container card">
//     <div className="form-group ">
//     <label htmlFor="adress"> Address of PartyB</label>
//     <input className="form-control" type="text" placeholder="Address of Other Party"  onChange={(e)=>{
//         setPartnerB(e.target.value);
//     }}/>
  
//   </div>
//   <div className="form-group ">
//     <label htmlFor="exampleInputRole">Company Name</label>
//     <input type="text" className="form-control" id="companyname" aria-describedby="Role" placeholder="Enter  Role" required
//     onChange={(e)=>{
//         setCompany(e.target.value);
//     }}/>
    
//   </div>
//   <div className="form-group ">
//     <label htmlFor="exampleInputRole">Write your Bond</label>
//     <input type="text" className="form-control" id="companyname" aria-describedby="companyname" placeholder="Enter Company Name" required
//     onChange={(e)=>{
//         setBond(e.target.value);
//     }}/>
    
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Amount</label>
//     <input type="digit" className="form-control" id="exampleInputPassword1" placeholder="Amount" 
//     onChange={(e)=>{
//         setAmount(e.target.value);
//     }}/>
//     <small id="passwordhelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
//   </div>
 
//   <button  className="btn btn-primary" onClick={SubmitLogin}>Submit</button>
// </form>
//         </div>
//            </div>
//     )
function Hex2decimal(hex)
{
    return ("0x" + hex) / 1;
} 
return(
<div>
  {
    transac.map((item,index)=>{
      return <div><div className="card container">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
  <div className="card-header">
 Receiver Address: {item.PartnerB}
  </div>
  <div className="card-body">
    <h5 className="card-title">Status of Request: {item.status}</h5>
    <p className="card-text">Bond Details: {item.Bond}</p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>

</div>
 })
}
</div>
)
}
export default Rreceived_Request