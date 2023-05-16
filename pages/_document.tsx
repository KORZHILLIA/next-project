import { Html, Head, Main, NextScript } from 'next/document';
import Header from '@/components/Header/Header';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header to1={'snickersContainer'} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
