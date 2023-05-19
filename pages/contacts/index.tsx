import { useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/shared/components/Header/header';
import Button from '../../shared/components/Button/button';

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
    const notify = (name: string) => toast.success(`Дякуємо, ${name}, ваші данні прийняті!`, { position: toast.POSITION.TOP_CENTER });
    
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>({ defaultValues: { isAgree: false } });
    
    const onSubmit: SubmitHandler<Inputs> = (data) => notify(data.name);

    const { less768px } = useBreakpoints();


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
            <main>
                <div className="container mx-auto px-1">
                    <section className='text-black'>
                    <Link href="/" className='max-w-[160px] mb-2 p-1 border border-zinc-300 rounded-md flex justify-center items-center gap-1 hover:bg-slate-200 transition-all'>
                        <Image src={arrowLeft} alt="Arrow left" width={less768px ? 16 : 20} height={less768px ? 16 : 20} />
                            <span className='text-sm md:text-base'>На головну</span>
                            </Link>
        <h1 className='mb-6 text-2xl md:text-4xl text-center'>Залишіть ваші контакти:</h1>
        <form className="max-w-[400px] mx-auto p-3 flex flex-col gap-5 border-2 border-zinc-300 rounded-md" onSubmit={handleSubmit(onSubmit)}>
            <label className="relative flex flex-col gap-1">
                <p className='sm:text-xl'>Ім'я</p>
                <input type="text" className={`p-1 border ${errors.name ? 'border-red-500' : 'border-zinc-400'} focus:outline-none text-sm rounded`} {...register("name", { required: true })} />
                {errors.name && <span className="absolute -bottom-4 left-0 text-xs font-medium text-red-600">Обов'язкове поле</span>}
      </label>
      
            <label className="relative flex flex-col gap-1">
                <p className='sm:text-xl'>Телефон</p>
                <input type="tel" className={`p-1 border ${errors.phone ? 'border-red-500' : 'border-zinc-400'} focus:outline-none text-sm rounded`} {...register("phone", { required: true })} />
      {errors.phone && <span className="absolute -bottom-4 left-0 text-xs font-medium text-red-600">Обов'язкове поле</span>}
      </label>
            <label className="relative flex flex-col gap-1">
                <p className='sm:text-xl'>Електронна пошта</p>
                <input type="email" className={`p-1 border ${errors.email ? 'border-red-500' : 'border-zinc-400'} focus:outline-none text-sm rounded`} {...register('email', { required: true })} />
                {errors.email && <span className="absolute -bottom-4 left-0 text-xs font-medium text-red-600">Обов'язкове поле</span>}
            </label>
            <label className="relative flex justify-center items-center gap-1">
            <input type='checkbox' {...register('isAgree', {
                    validate: value => value || 'error message' })} />
                    <span className='sm:text-xl leading-none'>Погоджуюсь з умовами</span>
                {errors.isAgree && <span className="absolute -bottom-4 left-9 text-xs font-medium text-red-600">Будь ласка, дайте згоду</span>}
                        </label>
                    <Button type='submit' text='Відправити' styles='w-[80%] mx-auto mt-6 bg-slate-100 hover:bg-slate-200 transition-all sm:text-xl' />
                        </form>
                        </section>
                </div>
                <ToastContainer autoClose={2000 } />
        </main>
        </>);
};