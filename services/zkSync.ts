import { SupportedChainId } from 'types/constants/supported-chains';
import * as zkSync from 'zksync';

export const getZkSyncWallet = async (signer: any, networkName: string) => {
  const syncProvider = await zkSync.getDefaultProvider(networkName);

  // Error is happening here
  return await zkSync.Wallet.fromEthSigner(signer, syncProvider);
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
