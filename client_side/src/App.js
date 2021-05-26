import { useState } from "react";
import { abiCode, contractAddress } from "./contractInfo";
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(abiCode, contractAddress);

function App() {

  const [name, SetName] = useState("");
  const [getName, setgetName] = useState("");
  const [test, setTest] = useState("");

  const handleGet = async (e) => {
    e.preventDefault();
    const result = await contract.methods.getData().call();
    setgetName(result);
  }

  const handleSet = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await contract.methods.setData(name).estimateGas();
    const result = await contract.methods.setData(name).send({ from: account, gas });
  }

  const doSomething = async () => {
    const result = await contract.methods.doSomething().call();
    console.log(result);
    setTest(result);
  }

  return (
    <div className="App">
      <h1>Welcome to DAPP</h1>

      <form onSubmit={handleSet}>
        <label>
          Enter the Name
          <br/>
        <input type="text" name="name" required onChange={e => SetName(e.target.value)}></input>
        </label>
        <br/>
        <input type="submit" value="Set Name" ></input>
      </form>
      <br />
      <button onClick={handleGet} type="button">Get Name</button>
      <br />
      {getName}
      <br />
      <button onClick={doSomething} type="button">DoSomething</button>
      <br />
      {test}
    </div>
  );
}

export default App;
