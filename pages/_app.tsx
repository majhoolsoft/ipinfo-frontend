import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../assets/css/bootstrap4.css";
// import "../assets/css/black-dashboard-react.css";

import { ReactElement } from "react";
import type { AppProps } from "next/app";
import PageWithLayoutType from "../layouts/types/pageWithLayouts";
import Head from "next/head";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};
function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" sizes="76x76" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
