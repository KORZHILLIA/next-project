import { useContext } from "react";
import Image from "next/image";

import useBreakpoints from "@/shared/hooks/useBreakpoints";
import { ThemeContext } from "@/context/themeContext";
import { ThemeContextType } from "@/context/themeContext.type";

import github from '../../../public/images/svg/github.svg';
import facebook from '../../../public/images/svg/facebook.svg';
import envelope from '../../../public/images/svg/envelope.svg';

export default function Footer() {
    const { isDark } = useContext(ThemeContext) as ThemeContextType;

    const { less768px } = useBreakpoints();

    return (
        <footer className={`text-xl md:text-2xl ${isDark ? 'bg-slate-500' : 'bg-slate-300 shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.1)]'}`}>
            <div className={`container mx-auto w-full p-4 lg:px-32 flex justify-center gap-2 sm:gap-24 md:gap-32 lg:gap-96 items-center text-black`}>
                <p>Автор: &copy; Корж Ілля</p>
            <ul className="flex gap-4">
                <li>
                    <a href='https://github.com/KORZHILLIA' target="_blank" rel="noreferrer noopener" >
                        <Image className="hover:invert transition-all" src={github} alt='GitHub Icon' width={less768px ? 20 : 26} height={less768px ? 20 : 26}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.facebook.com' target="_blank" rel="noreferrer noopener">
                        <Image className="hover:invert transition-all" src={facebook} alt='GitHub Icon' width={less768px ? 20 : 26} height={less768px ? 20 : 26}/>
                    </a>
                </li>
                <li>
                    <a href="mailto:kiev_drum2006@ukr.net" target="_blank" rel="noreferrer noopener">
                        <Image className="hover:invert transition-all" src={envelope} alt='GitHub Icon' width={less768px ? 20 : 26} height={less768px ? 20 : 26}/>
                    </a>
                </li>
            </ul>
            </div>
        </footer>
    );
 }