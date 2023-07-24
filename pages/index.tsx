import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect } from 'connectors';
import FullPremintERC20Token from 'contracts/abi/FullPremintERC20Token.json';
import { ethers } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import type { NextPage } from 'next';
import React from 'react';
import { getSigner } from 'services/zkSync';

const Home: NextPage = () => {
  const { library, active, activate, account, chainId } = useWeb3React();

  const handleCreateToken = async () => {
    try {
      if (!library) {
        activate(injected);
      } else if (chainId) {
        // Error is happening here
        const signer = await getSigner(library.getSigner(), chainId);

        const TokenFactory = new ethers.ContractFactory(
          FullPremintERC20Token.abi,
          FullPremintERC20Token.bytecode,
          signer
        );
        await TokenFactory.deploy();
        await TokenFactory.deploy(name, 'symbol', parseEther('123123123'), true);
      }
    } catch (err) {
      console.log('handleCreateToken - ', err);
    }
  };
  return (
    <div>
      <main>
        {active ? (
          <>
            <p> your wallet {account} is connected</p>
            <button onClick={() => handleCreateToken()}> Create Token</button>
          </>
        ) : (
          <>
            <button onClick={() => activate(injected, (err) => console.log('error connecting ', err))}>
              {' '}
              Metamask connect{' '}
            </button>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
