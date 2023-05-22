import { Html, Head, Main, NextScript } from 'next/document';

export default function Document({children}: {children: React.ReactNode}) {  
  return (
    <Html lang="uk">
      <Head/>
      <body>
        <Main />
        {children}
        <NextScript />
      </body>
    </Html>
  )
}
