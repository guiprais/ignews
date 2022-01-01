import { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

import { Hedaer } from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <NextAuthProvider session={pageProps.session}>
        <Hedaer />
        <Component {...pageProps} />
      </NextAuthProvider>
    </>
  );
}

export default MyApp;
