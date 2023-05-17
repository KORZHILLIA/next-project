import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Button from '@/shared/components/Button/Button';
import arrowLeft from '../../public/images/svg/arrow-left.svg';

type Inputs = {
  name: string,
    phone: string,
    email: string,
  isAgree: string,
};

export default function Contacts() { 
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful  } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    const [isAgree, setIsAgree] = useState<string>('false');

    const onAgreeChange = ({ target}: {target: HTMLInputElement}) => {
        const { value } = target;
        setIsAgree(() => value === 'false' ? 'true' : 'false')
    }
    useEffect(() => { 
        if (isSubmitSuccessful) {
            setIsAgree('false');
            reset({ name: '', phone: '', email: '', isAgree });
        }
    }, [reset, isSubmitSuccessful]);

    return (
    <>
        <Header />
            <main>
                <div className="container mx-auto px-1">
                    <Link href="/" className='max-w-[35%] mb-2 p-1 border border-zinc-300 rounded-md flex items-center gap-1 hover:bg-slate-200 transition-all'>
                        <Image src={arrowLeft} alt="Arrow left" width={16} height={16} />
                            <span className='text-sm'>На головну</span>
                            </Link>
        <h1 className='mb-3 text-2xl text-center'>Залишіть ваші контакти:</h1>
        <form className="w-[80%] mx-auto p-3 flex flex-col gap-5 border-2 border-zinc-300 rounded-md" onSubmit={handleSubmit(onSubmit)}>
            <label className="relative flex flex-col gap-1">
                <p>Ім'я</p>
                <input type="text" className="p-1 border border-zinc-400 focus:outline-none text-sm" {...register("name", { required: true })} />
                {errors.name && <span className="absolute -bottom-4 left-0 text-xs font-medium text-red-600">Обов'язкове поле</span>}
      </label>
      
            <label className="relative flex flex-col gap-1">
                <p>Телефон</p>
                <input type="tel" className="p-1 border border-zinc-400 focus:outline-none text-sm" {...register("phone", { required: true })} />
      {errors.phone && <span className="absolute -bottom-4 left-0 text-xs font-medium text-red-600">Обов'язкове поле</span>}
      </label>
            <label className="relative flex flex-col gap-1">
                <p>Електронна пошта</p>
                <input type="email" className="p-1 border border-zinc-400 focus:outline-none text-sm" {...register('email', { required: true })} />
                {errors.email && <span className="absolute -bottom-4 left-0 text-xs font-medium text-red-600">Обов'язкове поле</span>}
            </label>
            <label className="relative flex justify-center items-center gap-1">
                <input type='checkbox' value={isAgree} checked={isAgree === 'true'} {...register('isAgree', {
                    onChange: onAgreeChange, validate: value => value === 'true' || 'error message' })} />
                    <span className='leading-none'>Погоджуюсь з умовами</span>
                {errors.isAgree && <span className="absolute -bottom-4 left-9 text-xs font-medium text-red-600">Будь ласка, дайте згоду</span>}
            </label>
                    <Button type='submit' text='Відправити' style='mt-6 bg-slate-100 hover:bg-slate-200 transition-all' />
                    </form>
                    </div>
        </main>
        </>);
};