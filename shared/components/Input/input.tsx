import { useContext } from "react";

import { ThemeContext } from "@/context/themeContext";
import { ThemeContextType } from "@/context/themeContext.type";

import { InputProps } from "./inputProps.type";

export default function Input(props: InputProps) {
    const { isDark } = useContext(ThemeContext) as ThemeContextType;

    const { type, name, placeholder, inputStyles, errorStyles, register, options, errors, errorMessage } = props;
    
    return <>
        <input type={type} placeholder={`${placeholder ? placeholder : ''}`} className={`${errors[name] ? (isDark ? 'border-yellow-300 border-2' : 'border-red-500 border-2') : 'border-zinc-400'} ${inputStyles} ${placeholder ? (isDark ? 'placeholder:text-slate-500' : 'placeholder:text-slate-200)') : ''}`}
            {...register(name, options)} />
        <span className={`${errorStyles} ${errors[name] ? 'scale-100 transition duration-300 transform ease-in-out': 'scale-0 transition duration-3000 transform ease-in-out' }`}>{ errorMessage}</span>
        </>
}