import { useState, useContext } from "react";

import { IsDark, ThemeContextType, ThemeContext } from "@/context/themeContext";

import Image from "next/image";
import sun from '../../../public/images/svg/sun.svg';
import moon from'../../../public/images/svg/moon.svg';

export default function ThemeSwitcher() { 
    const { isDark, setIsDark} = useContext(ThemeContext) as ThemeContextType;

    const setDarkTheme = () => setIsDark(true);
    const setLightTheme = () => setIsDark(false);
    return (
        <div onClick={isDark ? setLightTheme : setDarkTheme} className="relative p-2 flex justify-between align-center w-[60px] h-[30px] border border-zinc-300 rounded-full bg-zinc-200 cursor-pointer">
            <Image src={sun} alt='' priority width={20} height={20} />
            <Image src={moon} alt='' priority width={20} height={20} />
            <div className={`${isDark ? 'translate-x-[100%]' : 'translate-x-0'} absolute top-[calc(50%-15px)] left-0 w-[30px] h-[30px] bg-slate-500 rounded-full transition-all`}></div>
        </div>);    
}