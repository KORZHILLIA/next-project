import { Html, Head, Main, NextScript } from 'next/document';
import Header from '@/components/Header';

export default function Document({children}: {children: React.ReactNode}) {
  
  return (
    <Html lang="en">
      <Head />
      <body>
        {children}
        {/* <Header to1={'snickersContainer'} /> */}
        {/* <Main /> */}
        <NextScript />
      </body>
    </Html>
  )
}
