import { AppProps } from 'next/app';
import Head from 'next/head';
import { Hedaer } from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <Hedaer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
