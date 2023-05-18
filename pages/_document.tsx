import { Html, Head, Main, NextScript } from 'next/document';
import Header from '@/shared/components/Header/header';

export default function Document({children}: {children: React.ReactNode}) {
  
  return (
    <Html lang="en">
      <Head />
      <body>
        {children}
        <NextScript />
      </body>
    </Html>
  )
}
