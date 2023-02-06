import { Roboto_Mono } from '@next/font/google'
import type { AppProps } from "next/app";
import { Fragment } from 'react';
import GlobalStyle from '@/styles/globalStyle';
import Layout from '@/components/Layout';

const RobotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={RobotoMono.className}>
      <Fragment>
      <GlobalStyle />
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Fragment>
    </main>
  );
}
