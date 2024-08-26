import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head >
      <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" async></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
