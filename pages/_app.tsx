import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';

function SEO() {
  const {t} = useTranslation();

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{t("glossetaFoundationTitle")}</title>
      <meta name="description" content={t("glossetaFoundationSEODescription")} />
      <link rel="icon" href="/glosseta_icon.png" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.glosseta.foundation" />
      <meta property="og:title" content={t("glossetaFoundationTitle")} />
      <meta property="og:description" content={t("glossetaFoundationSEODescription")}/>
      <meta property="og:image" content="https://www.glosseta.foundation/glosseta_foundation_logo.jpg" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.glosseta.foundation" />
      <meta property="twitter:title" content={t("glossetaFoundationTitle")} />
      <meta property="twitter:description" content={t("glossetaFoundationSEODescription")} />
      <meta property="twitter:image" content="https://www.glosseta.foundation/glosseta_foundation_logo.jpg" />
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