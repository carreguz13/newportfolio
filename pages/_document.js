import Document, { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
import op from "../public/og.JPG";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="Portfolio website" />
          <meta
            property="og:description"
            content="¡Welcome to my portfolio website!"
          />
          <meta property="og:image" content={op} />
          <meta property="og:type" content="website" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
            type="text/css"
          ></link>
          <link rel="stylesheet" href="css/animate.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          ></link>
          <title>Welcome!</title>
          <link rel="icon" href="/favicon2.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
