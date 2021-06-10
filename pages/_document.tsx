import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/TitilliumWeb.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/TitilliumWeb-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/TitilliumWeb-Italic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/TitilliumWeb-BoldItalic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
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

export default MyDocument;