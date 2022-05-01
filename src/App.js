import './App.css';
import { useState ,useEffect} from 'react';

import { ethers } from 'ethers'

import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import Navbar from './Navbar';


const greeterAddress = "0x59b670e9fA9D0A427751Af201D676719a970857b"
const tokenAddress = "0x59b670e9fA9D0A427751Af201D676719a970857b"

function App() {
  const [greeting, setGreetingValue] = useState()
  const [Address, setAddress] = useState('')
  const [IsAccount, setIsAccount] = useState(false);

  
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const val = await provider.provider.selectedAddress;
      

      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      
      try {
        
      
    const val3 = await contract.greet2(2);
    console.log(val3);
        
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }
/*
  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
      const balance = await contract.balanceOf(account);
      console.log("Balance: ", balance.toString());
    }
  }
*/
async function checkAccount(){
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount()
    
    
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const val = await provider.provider.selectedAddress;
    console.log(val);
    setAddress(val);
    const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
    console.log("ash")
    const data = await contract.haveAccount();
    console.log(data,"isAccount")
        setIsAccount(data);
}
useEffect(async() => {
 checkAccount();

},[])
  async function setGreeting() {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      
      const transaction = await contract.setGreeting(greeting)
      await transaction.wait()
      fetchGreeting()
    }
  }
/*
  async function sendCoins() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
      const transaction = await contract.transfer(userAccount, amount);
      await transaction.wait();
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }
  */



  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name,value,"adsjhb");
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs)
  }
  async function registerAccount() {
    if (IsAccount) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      
      const transaction = await contract.AccountLogin(inputs.companyName,inputs.role,inputs.password)
      await transaction.wait()
      checkAccount()
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.companyName,inputs.role,inputs.password);
    registerAccount();

  }
 
function Login(props){
  if(IsAccount==false){
    return(    <form onSubmit={handleSubmit}>
      <label>Enter company Name:
      <input 
        type="text" 
        name="companyName" 
        value={inputs.companyName || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter Role:
      <input 
        type="text" 
        name="role" 
        value={inputs.role || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>)
  }
  else
  return (
    <Navbar/>
  )
}
  return (
  <Navbar/>
  )
}

export default App;