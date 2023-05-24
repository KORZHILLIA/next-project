import { useEffect, useContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify';

import Input from '@/shared/components/Input/input';
import Button from '../../shared/components/Button/Button';

import { ThemeContext } from '@/context/themeContext';
import { ThemeContextType } from '@/context/themeContext.type';

import Inputs from './inputs.type';
import { labelStyle, inputStyle, errorStyle, errorCheckboxStyle, buttonStyle } from './contactForm-styles';




export default function ContactForm() {
    const { isDark } = useContext(ThemeContext) as ThemeContextType;

    const notify = (name: string) => {toast.success(`Дякуємо, ${name}, ваші данні прийняті!`, { position: toast.POSITION.TOP_CENTER })};

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>({ defaultValues: { isAgree: false }, mode: 'onBlur' });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        notify(data.name);
        console.log(data);
    };


    useEffect(() => { 
        if (isSubmitSuccessful) {
            reset();
        }
    }, [reset, isSubmitSuccessful]);

    return (
        <form className={`max-w-[400px] mx-auto p-3 flex flex-col gap-5 border-2 border-${isDark ? 'zinc-300' : 'zinc-600'} text-black rounded-md`} onSubmit={handleSubmit(onSubmit)}>
                            <label className={labelStyle}>
                                <p className={`${isDark ? 'text-white' : 'text-black'} sm:text-xl`}>Ім'я</p>
                                <Input type='text' name='name' register={register} options={{
                                    validate: {
                                        noValue: (value: string) => value !== '' || "Обов'язкове поле",
                                        longValue: (value: string) => value.length <= 20 || '20 символів, не більше',
                                    }
                                }}
                                    errors={errors}
                                    placeholder="Введіть ваше ім'я"
                                    inputStyles={`${inputStyle} ${isDark ? 'bg-slate-400' : 'bg-slate-200'}`}
                                    errorStyles={`${errorStyle} ${isDark && 'text-yellow-300'}`}
                                    errorMessage={errors.name?.message}
                                />
                            </label>      
                            <label className={labelStyle}>
                                <p className={`${isDark ? 'text-white' : 'text-black'} sm:text-xl`}>Телефон</p>
                                <Input type='tel' name='phone' register={register} options={{
                                    validate: {
                                        noValue: (value: string) => value !== '' || "Обов'язкове поле",
                                        longValue: (value: string) => value.length <= 13 || 'Зупиніться, максимум 13 символів',
                                        testValue: (value: string) => {
                                            const phoneRegexp = /\+380\d{9}/;
                                            return phoneRegexp.test(value) || 'Дотримуйтесь формату +380XXXXXXXXX';
                                        }
                                    }
                                    }} errors={errors}
                                    placeholder='+380ХХХХХХХХХ'
                                    inputStyles={`${inputStyle} ${isDark ? 'bg-slate-400' : 'bg-slate-200'}`}
                                    errorStyles={`${errorStyle} ${isDark && 'text-yellow-300'}`}
                                    errorMessage={ errors.phone?.message}
                                />
                            </label>
                            <label className={labelStyle}>
                                <p className={`${isDark ? 'text-white' : 'text-black'} sm:text-xl`}>Електронна пошта</p>
                                <Input type='email' name='email' register={register} options={{ validate: {
                                        noValue: (value: string) => value !== '' || "Обов'язкове поле",
                                        testValue: (value: string) => {
                                            const emailRegexp = /^\S+@\S+\.\S+$/;
                                            return emailRegexp.test(value) || 'Дотримуйтесь формату ел. пошти';
                                        }
                                    } }} errors={errors}
                                    placeholder='example@mail.com' 
                                    inputStyles={`${inputStyle} ${isDark ? 'bg-slate-400' : 'bg-slate-200'}`}
                                    errorStyles={`${errorStyle} ${isDark && 'text-yellow-300'}`}
                                    errorMessage={errors.email?.message}
                                />
                            </label>
                            <label className="relative w-[95%] mb-6 mx-auto flex justify-center items-center gap-1">
                                <Input type='checkbox' name='isAgree' register={register} options={{ validate: (value: boolean) => value || 'Будь ласка, погодьтеся з умовами' }}
                                    errors={errors} errorStyles={`${errorCheckboxStyle} ${isDark && 'text-yellow-300'}`}
                                    errorMessage={errors.isAgree?.message}
                                />
                                <span className={`${isDark ? 'text-white' : 'text-black'} sm:text-xl leading-none`}>Погоджуюсь з умовами</span>
                            </label>
                            <Button type='submit' text='Відправити' styles={`${buttonStyle} ${isDark ? 'bg-slate-400 hover:bg-slate-500 text-white' : 'bg-slate-100 hover:bg-slate-200'} transition-all sm:text-xl`} />
                        </form>
    );
}

