import { useContext } from "react";

import Head from "next/head";

import Header from "@/shared/components/Header/header";
import Hero from "../components/Hero/hero";
import PopularGoods from "../components/PopularGoods/popularGoods";
import { ThemeContext } from "@/context/themeContext";
import { ThemeContextType } from '@/context/themeContext.type';

export default function Home() {
  const { isDark } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      <Head>
        <title>СпортТовари</title>
        <meta property='og:title' content='СпортТовари' key='title' />
        <meta name="description" content="Сайт, присвячений спортивним товарам" />
      </Head>
      <Header home />
      <main className={`${isDark ? 'text-white bg-slate-600' : 'text-black bg-slate-300'}`}>
       <Hero />
       <PopularGoods />
    </main>
      </>
  )
}
