import { useContext } from "react";

import { ThemeContext } from "@/context/themeContext";
import { ThemeContextType } from "@/context/themeContext.type";

import Image from "next/image";
import sun from '../../../public/images/svg/sun.svg';
import moon from'../../../public/images/svg/moon.svg';

export default function ThemeSwitcher() {
    const THEME_KEY = 'theme';
    const { isDark, setIsDark} = useContext(ThemeContext) as ThemeContextType;

    const setDarkTheme = () => {
        setIsDark(true);
        localStorage.setItem(THEME_KEY, 'true');
    };
    const setLightTheme = () => {
        setIsDark(false);
        localStorage.setItem(THEME_KEY, 'false');
    };
    
    return (
        <div onClick={isDark ? setLightTheme : setDarkTheme} className="relative p-2 flex justify-between align-center w-[60px] h-[30px] border border-zinc-300 rounded-full bg-zinc-200 cursor-pointer">
            <Image src={sun} alt='Sun icon' priority width={20} height={20} />
            <Image src={moon} alt='Moon icon' priority width={20} height={20} />
            <div className={`${isDark ? 'translate-x-[100%]' : 'translate-x-0'} absolute top-[calc(50%-15px)] left-0 w-[30px] h-[30px] bg-slate-500 border rounded-full transition-all`}></div>
        </div>);    
}