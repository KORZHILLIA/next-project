import Head from "next/head";

import Header from "@/shared/components/Header/header";
import Hero from "@/components/Hero/hero";
import PopularGoods from "@/components/PopularGoods";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>СпортТовари</title>
        <meta property='og:title' content='СпортТовари' key='title' />
        <meta name="description" content="Сайт, присвячений спортивним товарам" />
      </Head>
      <Header home />
    <main>
      <div className="container mx-auto px-1">
       <Hero />
       <PopularGoods />
     </div>
    </main>
      </>
  )
}
