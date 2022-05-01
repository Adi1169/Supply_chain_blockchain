//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    
    struct account{
        string Role;
        string Companyname;
    }
      struct Transaction{
        uint Amount;
        address PartnerA;
        address PartnerB;
        string Bond;
        address RequestedParty;
        string status;
        uint Receivecount;
        uint sentcount;
         }
         string public hell='0';
    string private greeting;
    mapping(address=>bool)AccountCreated;
    mapping(address=>account)Account;
    mapping(address=>string)Password;
    mapping(address=>Transaction[])public sentRequestList ;
    mapping(address=>Transaction[])public ReceivedRequestList;
     mapping(address=>Transaction[])public AcceptedReceivedRequestList;
      mapping(address=>Transaction[])public AcceptedSentRequestList;
        mapping(address=>Transaction[])public RejectedReceivedRequestList;
      mapping(address=>Transaction[])public RejectedSentRequestList;
   
    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;

    }

    function greet() public view returns (string memory) {
        return greeting;
    }
     function AccountLogin(string memory Role,string memory CompanyName,string memory password) public  {

        AccountCreated[msg.sender]=true;
        Account[msg.sender]=account(Role,CompanyName);
        Password[msg.sender]=password;
        

    }
    
function RequestedTransaction()public view returns (Transaction[] memory){
    return sentRequestList[msg.sender];
}
function ReceivedTransaction()public view returns (Transaction[] memory){
    return ReceivedRequestList[msg.sender];
}
function sentRequestListlen()public view returns (uint ){
    return sentRequestList[msg.sender].length;

}
function acceptRequest(uint index)public   returns( bool ){
    ReceivedRequestList[msg.sender][index].status="ACCEPTED";
    // address  sender= ReceivedRequestList[msg.sender][index].PartnerB;
    // uint  senderind= ReceivedRequestList[msg.sender][index].sentcount;
    // sentRequestList[sender][senderind].status="ACCEPTED";
    AcceptedReceivedRequestList[msg.sender].push(ReceivedRequestList[msg.sender][index]);
    // AcceptedSentRequestList[sender].push(sentRequestList[sender][senderind]);
    return true;
}
function RejectRequest(uint index)public  returns(bool ){
    ReceivedRequestList[msg.sender][index].status="REJECTED";
    address  sender= ReceivedRequestList[msg.sender][index].PartnerB;
    uint  senderind= ReceivedRequestList[msg.sender][index].sentcount;
    sentRequestList[sender][senderind].status="REJECTED";
     RejectedReceivedRequestList[msg.sender].push(ReceivedRequestList[msg.sender][index]);
   RejectedSentRequestList[sender].push(sentRequestList[sender][senderind]);
   return true;
}
function ReceivedRequestListlen()public view returns (uint ){
    return ReceivedRequestList[msg.sender].length;

}
function MakeRequest(uint Amount, address PartnerB,string memory Bond,string memory status)public{
    //  require(AccountCreated[PartnerB],'The Address provided dont have any account');
     
     uint count = sentRequestListlen();
     uint receivedcount = ReceivedRequestListlen();
     sentRequestList[msg.sender].push(Transaction(Amount,msg.sender,PartnerB,Bond,msg.sender,status,receivedcount,count));
     ReceivedRequestList[PartnerB].push(Transaction(Amount,msg.sender,PartnerB,Bond,msg.sender,status,receivedcount,count));
 }
function haveAccount() public view returns (bool ) {
        return AccountCreated[msg.sender];
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
