/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Bootstrap */}

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          />

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
          {/* Fonte Inter */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="" />
          <link
            rel="shortcut icon"
            href="/imagens/logoGall1.png"
            type="image/png"
          />
          <script
            src="https://apis.google.com/js/platform.js"
            async
            defer
          ></script>
          <meta
            name="google-signin-client_id"
            content="321869646769-11o4q7thsicte8g6ro7hgball8tvot5j.apps.googleusercontent.com"
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
