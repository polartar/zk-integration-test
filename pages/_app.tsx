import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React, { ReactElement, ReactNode } from 'react';

// Exporting a layout type for nested layouts
export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider, 'any');
  library.pollingInterval = 15000;
  return library;
}

// const Web3ReactProviderReloaded = createWeb3ReactRoot('network')

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Web3ReactProvider getLibrary={(provider: any) => getLibrary(provider)}>
        <Component {...pageProps} />

        {/* </Web3ReactProviderReloaded> */}
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
