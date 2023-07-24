export enum SupportedChainId {
  GOERLI = 5,
  MUMBAI = 80001,
  ZK_SYNC_MAINNET = 324,
  ZK_SYNC_TESTNET = 280
}

export const PROD_SUPPORTED_CHAIN_IDS = [SupportedChainId.ZK_SYNC_MAINNET];

export const DEMO_SUPPORTED_CHAIN_IDS = [SupportedChainId.GOERLI, SupportedChainId.MUMBAI];

export const DEV_SUPPORTED_CHAIN_IDS = [
  SupportedChainId.GOERLI,
  SupportedChainId.MUMBAI,
  SupportedChainId.ZK_SYNC_TESTNET,
  SupportedChainId.ZK_SYNC_MAINNET
];

export const SUPPORTED_CHAIN_IDS = DEV_SUPPORTED_CHAIN_IDS;

export interface Network {
  id: number;
  icon: string;
  title: string;
  code: string;
  rpc: string;
  explorer: string;
  multisigTxUrl: string;
}

type ChainsType = {
  [network: number]: Network;
};

export const prodSupportedChains: ChainsType = {
  [SupportedChainId.ZK_SYNC_MAINNET]: {
    id: 324,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24091.png',
    title: 'ZK Mainnet',
    code: 'ETH',
    rpc: 'https://mainnet.era.zksync.io',
    explorer: 'https://explorer.zksync.io',
    multisigTxUrl: ''
  }
};

export const demoSupportedChains: ChainsType = {
  [SupportedChainId.GOERLI]: {
    id: 5,
    icon: '/icons/chains/ethereum.svg',
    title: 'Goerli',
    code: 'ETH',
    rpc: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    explorer: 'https://goerli.etherscan.io',
    multisigTxUrl: 'https://safe-transaction-goerli.safe.global'
  },

  [SupportedChainId.MUMBAI]: {
    id: 80001,
    icon: '/icons/chains/polygon.svg',
    title: 'Polygon Mumbai Testnet',
    code: 'MATIC',
    rpc: 'https://rpc-mumbai.maticvigil.com',
    explorer: 'https://mumbai.polygonscan.com',
    multisigTxUrl: ''
  }
};

export const devSupportedChains: ChainsType = {
  [SupportedChainId.GOERLI]: {
    id: 5,
    icon: '/icons/chains/ethereum.svg',
    title: 'Goerli',
    code: 'ETH',
    rpc: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    explorer: 'https://goerli.etherscan.io',
    multisigTxUrl: 'https://safe-transaction-goerli.safe.global'
  },

  [SupportedChainId.MUMBAI]: {
    id: 80001,
    icon: '/icons/chains/polygon.svg',
    title: 'Polygon Mumbai Testnet',
    code: 'MATIC',
    rpc: 'https://rpc-mumbai.maticvigil.com',
    explorer: 'https://mumbai.polygonscan.com',
    multisigTxUrl: ''
  },
  [SupportedChainId.ZK_SYNC_TESTNET]: {
    id: 280,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24091.png',
    title: 'ZK Testnet',
    code: 'ETH',
    rpc: 'https://testnet.era.zksync.dev',
    explorer: 'https://zksync2-testnet.zkscan.io/',
    multisigTxUrl: ''
  },
  [SupportedChainId.ZK_SYNC_MAINNET]: {
    id: 324,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24091.png',
    title: 'ZK Mainnet',
    code: 'ETH',
    rpc: 'https://mainnet.era.zksync.io',
    explorer: 'https://explorer.zksync.io',
    multisigTxUrl: ''
  }
};

export const AllChains = devSupportedChains;

export const SupportedChains = devSupportedChains;
