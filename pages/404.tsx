import { useContext } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

import Header from "@/shared/components/Header/header";
import Button from "@/shared/components/Button/Button";

import { ThemeContext } from "@/context/themeContext";
import { ThemeContextType } from "@/context/themeContext.type";


export default function Page404() {
    const { isDark } = useContext(ThemeContext) as ThemeContextType;
    const router = useRouter();
    
    return (
    <>
        <Head>
            <title>СпортТовари</title>
            <meta property='og:title' content='СпортТовари' key='title' />
            <meta name="description" content="Сайт, присвячений спортивним товарам" />
            </Head>
            <Header />
            <main className={`w-full h-screen ${isDark ? 'bg-slate-600' : 'bg-slate-200'}`}>
                <h1 className={`text-center text-4xl md:text-6xl mb-4 pt-[calc(50vh-54px)] ${isDark ? 'text-white' : 'text-black'}`}>Сторінку не знайдено</h1>
                <Button onBtnClick={() => router.back()} type="button" text="Повернутися" styles={`block max-w-[200px] mx-auto p-2 bg-sky-600 text-center text-2xl`} />
        </main>
        </>
    );
}