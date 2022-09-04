import Document, { Html, Head, Main, NextScript } from "next/document";

import { GTM_ID } from "../libs/gtm";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

    return (
      <Html lang='en'>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height='0'
              width='0'
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
