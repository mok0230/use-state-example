import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ethers } from "ethers"

function App() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_ETH_NODE_HTTP_URL);

  // useEffect executes the function after mount if provided an empty array as second argument
  // this effectively updates the current block when the app is launched
  React.useEffect(() => {
    updateCurrentBlock();
  }, []);

  // initializes count to 0 with the argument to useState
  const [currentBlock, setCurrentBlock] = useState(null);

  const updateCurrentBlock = async () => {
    const blockCount = await provider.getBlockNumber();

    setCurrentBlock(blockCount);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {currentBlock && <p>
          The current block is: {currentBlock}
        </p>}
        <button onClick={updateCurrentBlock}>
          Update the current block
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
