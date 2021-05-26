export const contractAddress = "0x0923B10383A7a7b4198049Aa19fA12f9741eB2C1";
export const abiCode =[
  {
    "constant": true,
    "inputs": [],
    "name": "doSomething",
    "outputs": [
      {
        "internalType": "string",
        "name": "_test",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "doSomething1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_test",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "setData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getData",
    "outputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]