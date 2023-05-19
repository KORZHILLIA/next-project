import { useEffect } from 'react';
import { useForm, FormProvider, useFormContext, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/shared/components/Header/header';
import Button from '@/shared/components/Button/button';
import Input from '@/shared/components/Input/input';

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

    const onSubmit: SubmitHandler<Inputs> = ({ name }) => notify(name);    

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
                                <Input type='text' name='name' register={register} options={{ required: true }}  errors={errors}  
                                    inputStyles={`p-1 border focus:outline-none text-sm rounded`}
                                    errorStyles='absolute -bottom-4 left-0 text-xs font-medium text-red-600'
                                    errorMessage="Обов'язкове поле"
                                />
      </label>
      
            <label className="relative flex flex-col gap-1">
                                <p className='sm:text-xl'>Телефон</p>
                                <Input type='tel' name='phone' register={register} options={{ required: true }} errors={errors}
                                inputStyles={`p-1 border focus:outline-none text-sm rounded`}
                                    errorStyles='absolute -bottom-4 left-0 text-xs font-medium text-red-600'
                                    errorMessage="Обов'язкове поле"
                                />
      </label>
            <label className="relative flex flex-col gap-1">
                                <p className='sm:text-xl'>Електронна пошта</p>
                                <Input type='email' name='email' register={register} options={{ required: true }} errors={errors}
                                inputStyles={`p-1 border focus:outline-none text-sm rounded`}
                                    errorStyles='absolute -bottom-4 left-0 text-xs font-medium text-red-600'
                                    errorMessage="Обов'язкове поле"
                                />
            </label>
                            <label className="relative flex justify-center items-center gap-1">
                                <Input type='checkbox' name='isAgree' register={register} options={{ validate: (value: boolean) => value || 'error message' }}
                                    errors={errors} errorStyles='absolute -bottom-4 left-16 text-xs font-medium text-red-600'
                                    errorMessage='Будь ласка, дайте згоду'
                                />
                    <span className='sm:text-xl leading-none'>Погоджуюсь з умовами</span>
                        </label>
                    <Button type='submit' text='Відправляю' styles='w-[80%] mx-auto mt-6 bg-slate-100 hover:bg-slate-200 transition-all sm:text-xl' />
                            </form>
                        </section>
                </div>
                <ToastContainer autoClose={2000 } />
        </main>
        </>);
};