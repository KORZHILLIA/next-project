import { useEffect, useContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify';

import Input from '@/shared/components/Input/input';
import Button from '../../shared/components/Button/Button';

import { ThemeContext, ThemeContextType } from '@/context/themeContext';


type Inputs = {
  name: string,
    phone: string,
    email: string,
  isAgree: boolean,
};

export default function ContactForm() {
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
    );
}

