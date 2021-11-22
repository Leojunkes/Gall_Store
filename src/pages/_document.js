/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Leo-Junkes</title>
          {/* Google Fonts  */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          {/* Fonte Roboto  */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          {/* Fonte princessa Sofia  */}
          <link
            href="https://fonts.googleapis.com/css2?family=Princess+Sofia&display=swap"
            rel="stylesheet"
          />
          {/* Fonte Prata  */}
          <link
            href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="" />
          <link
            rel="shortcut icon"
            href="/imagens/logoLeoflin1.png"
            type="image/png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
1;
