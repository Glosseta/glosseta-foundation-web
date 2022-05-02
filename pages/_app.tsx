import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from 'next-i18next';

function SEO() {
  return (
    <Head>
      <title>Glosseta Foundation</title>
      <meta name="description" content="The Glosseta Foundation" />
      <link rel="icon" href="/glosseta_icon.png" />
      <script defer data-domain="glosseta.foundation" src="https://plausible.io/js/plausible.js"></script>
    </Head>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(MyApp);