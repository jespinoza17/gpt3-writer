import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3 Writer" key="title"/>
        <meta property="og:description" content="build with buildspace" key="description"/>
        <meta
          property="og:image"
          content="https://www.cartoonbucket.com/wp-content/uploads/2017/04/Naruto-Holding-Stick-600x450.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}