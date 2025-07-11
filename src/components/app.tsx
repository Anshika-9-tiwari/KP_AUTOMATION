// pages/_app.js
import Layout from '../app/layout'; 
import '../styles/globals.css'; 

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
