import { SupportedChainId } from 'types/constants/supported-chains';
import { Web3Provider } from 'zksync-web3';

export const getZkSyncWallet = async (signer: any, networkName: string) => {
  // const provider = new Web3Provider(signer.gerProvider());
  const provider = new Web3Provider((window as any).ethereum);
  await provider.send('eth_requestAccounts', []);
  return provider.getSigner();
};

export const getSigner = async (signer: any, chainId: number) => {
  if (chainId === SupportedChainId.ZK_SYNC_TESTNET) {
    return await getZkSyncWallet(signer, 'goerli');
  } else if (chainId === SupportedChainId.ZK_SYNC_MAINNET) {
    return await getZkSyncWallet(signer, 'mainnet');
  } else {
    return signer;
  }
};
