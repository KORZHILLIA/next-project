import {useContext } from 'react';
import {ToastContainer } from 'react-toastify';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/shared/components/Header/header';
import ContactForm from '@/components/ContactForm/contactForm';
import Footer from '@/shared/components/Footer/footer';

import { ThemeContext } from '@/context/themeContext';
import { ThemeContextType } from '@/context/themeContext.type';

import useBreakpoints from '@/shared/hooks/useBreakpoints';
import arrowLeft from '../../public/images/svg/arrow-left.svg';
import "react-toastify/dist/ReactToastify.css";

export default function Contacts() { 
    const { less768px } = useBreakpoints();

    const { isDark } = useContext(ThemeContext) as ThemeContextType;
    
    return (
        <>
            <Head>
                <title>СпортТовари</title>
                <meta property='og:title' content='СпортТовари' key='title' />
                <meta name="description" content="Сайт, присвячений спортивним товарам" />
            </Head>
            <Header />
            <main className={`${isDark ? 'text-white bg-slate-600' : 'text-black bg-slate-300'}`}>
                <div className="container mx-auto px-4 lg:px-32">
                    <section className='pt-20 pb-48'>
                        <div className='mb-2 flex justify-between'>
                            <Link href="/" className={`max-w-[160px] p-1 border-2 border-${isDark ? 'zinc-300' : 'zinc-600'} rounded-md flex justify-center items-center gap-1 ${isDark ? 'hover:bg-slate-500' : 'hover:bg-slate-200'} transition-all`}>
                                <Image className={`${isDark && 'filter: invert'}`} src={arrowLeft} alt="Arrow left" width={less768px ? 16 : 20} height={less768px ? 16 : 20} />
                                <span className='text-sm md:text-base'>На головну</span>
                            </Link>
                        </div>
                        <h1 className='mb-6 text-2xl md:text-4xl text-center'>Залишіть ваші контакти:</h1>
                        <ContactForm />
                    </section>
                </div>
                <ToastContainer theme={`${isDark ? 'dark' : 'light'}`} autoClose={2000 } />
            </main>
            <Footer />
        </>);
};