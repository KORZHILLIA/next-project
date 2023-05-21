import { useEffect, useContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import ThemeSwitcher from '@/shared/components/ThemeSwitcher/themeSwitcher';
import Header from '@/shared/components/Header/header';
import Button from '../../shared/components/Button/Button';
import Input from '@/shared/components/Input/input';

import { ThemeContext, ThemeContextType } from '@/context/themeContext';
import useBreakpoints from '@/shared/hooks/useBreakpoints';
import arrowLeft from '../../public/images/svg/arrow-left.svg';
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  name: string,
    phone: string,
    email: string,
  isAgree: boolean,
};

export default function Contacts() { 
    const { less768px } = useBreakpoints();

    const { isDark } = useContext(ThemeContext) as ThemeContextType;
    
    const notify = (name: string) => toast.success(`Дякуємо, ${name}, ваші данні прийняті!`, { position: toast.POSITION.TOP_CENTER });
    
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>({ defaultValues: { isAgree: false } });

    const onSubmit: SubmitHandler<Inputs> = ({ name }) => notify(name);    



    useEffect(() => { 
        if (isSubmitSuccessful) {
            reset();
        }
    }, [reset, isSubmitSuccessful]);

    return (
        <>
            <Head>
                <title>СпортТовари</title>
                <meta property='og:title' content='СпортТовари' key='title' />
                <meta name="description" content="Сайт, присвячений спортивним товарам" />
            </Head>
            <Header />
            <main className={`${isDark ? 'text-white bg-slate-600' : 'text-black bg-slate-300'} h-screen`}>
                <div className="container mx-auto px-1">
                    <section className='pt-6'>
                        <div className='flex justify-between'>
                            <Link href="/" className={`max-w-[160px] mb-2 p-1 border-2 border-${isDark ? 'zinc-300' : 'zinc-600'} rounded-md flex justify-center items-center gap-1 ${isDark ? 'hover:bg-slate-500' : 'hover:bg-slate-200'} transition-all`}>
                                <Image src={arrowLeft} alt="Arrow left" width={less768px ? 16 : 20} height={less768px ? 16 : 20} />
                                <span className='text-sm md:text-base'>На головну</span>
                            </Link>
                            <ThemeSwitcher />
                        </div>
                        <h1 className='mb-6 text-2xl md:text-4xl text-center'>Залишіть ваші контакти:</h1>
                        <form className={`max-w-[400px] mx-auto p-3 flex flex-col gap-5 border-2 border-${isDark ? 'zinc-300' : 'zinc-600'} text-black rounded-md`} onSubmit={handleSubmit(onSubmit)}>
                            <label className="relative flex flex-col gap-1">
                                <p className='sm:text-xl'>Ім'я</p>
                                <Input type='text' name='name' register={register} options={{ required: "Обов'язкове поле" }}  errors={errors}  
                                    inputStyles={`p-1 border ${isDark ? 'bg-slate-400' : 'bg-slate-200'} focus:outline-none text-sm rounded`}
                                    errorStyles='absolute -bottom-4 left-0 text-xs font-medium text-red-600'
                                    errorMessage={errors.name?.message}
                                />
                            </label>      
                            <label className="relative flex flex-col gap-1">
                                <p className='sm:text-xl'>Телефон</p>
                                <Input type='tel' name='phone' register={register} options={{
                                    validate: {
                                        noValue: (value: string) => value !== '' || "Обов'язкове поле",
                                        longValue: (value: string) => value.length <= 13 || 'Зупиніться, максимум 13 символів',
                                        testValue: (value: string) => {
                                            const phoneRegexp = /\+380\d{9}/;
                                            return phoneRegexp.test(value) || 'Будь ласка, дотримуйтесь формату +380XXXXXXXXX';
                                        }
                                    }
                                }} errors={errors}
                                    inputStyles={`p-1 border ${isDark ? 'bg-slate-400' : 'bg-slate-200'} focus:outline-none text-sm rounded`}
                                    errorStyles='absolute -bottom-4 left-0 text-xs font-medium text-red-600'
                                    errorMessage={ errors.phone?.message}
                                />
                            </label>
                            <label className="relative flex flex-col gap-1">
                                <p className='sm:text-xl'>Електронна пошта</p>
                                <Input type='email' name='email' register={register} options={{ validate: {
                                        noValue: (value: string) => value !== '' || "Обов'язкове поле",
                                        testValue: (value: string) => {
                                            const emailRegexp = /^\S+@\S+\.\S+$/;
                                            return emailRegexp.test(value) || 'Будь ласка, дотримуйтесь формату ел. пошти';
                                        }
                                    } }} errors={errors}
                                    inputStyles={`p-1 border ${isDark ? 'bg-slate-400' : 'bg-slate-200'} focus:outline-none text-sm rounded`}
                                    errorStyles='absolute -bottom-4 left-0 text-xs font-medium text-red-600'
                                    errorMessage={ errors.email?.message}
                                />
                            </label>
                            <label className="relative flex justify-center items-center gap-1">
                                <Input type='checkbox' name='isAgree' register={register} options={{ validate: (value: boolean) => value || 'Будь ласка, погодьтеся з умовами' }}
                                    errors={errors} errorStyles='absolute -bottom-4 left-16 text-xs font-medium text-red-600'
                                    errorMessage={errors.isAgree?.message}
                                />
                                <span className='sm:text-xl leading-none'>Погоджуюсь з умовами</span>
                            </label>
                            <Button type='submit' text='Відправити' styles={`w-[80%] mx-auto mt-6 ${isDark ? 'bg-slate-400 hover:bg-slate-500' : 'bg-slate-100 hover:bg-slate-200'} transition-all sm:text-xl`} />
                        </form>
                    </section>
                </div>
                <ToastContainer autoClose={2000 } />
            </main>
        </>);
};