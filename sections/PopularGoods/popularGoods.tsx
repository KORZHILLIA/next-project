import { useContext } from "react";
import { Element } from "react-scroll";

import { ThemeContext } from "@/context/themeContext";
import { ThemeContextType } from "@/context/themeContext.type";

import Link from "next/link";
import Slider from "../../components/Slider/slider";

export default function PopularGoods() { 
    const { isDark } = useContext(ThemeContext) as ThemeContextType;
    
        return <Element name="popularGoods">
             <section className="py-4" >
        <div className='container mx-auto px-4'>
           <h2 className="mb-4 text-2xl md:text-4xl text-center">Наші найпопулярніші товари</h2>
        <Slider />
        <Link href='/contacts' className={`flex justify-center items-center max-w-xs p-2 mx-auto border text-2xl md:text-4xl ${isDark ? 'bg-slate-500 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-all`}>Замовити</Link>
        </div>
    </section>
        </Element>
};