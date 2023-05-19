import { Element } from "react-scroll";

import Link from "next/link";
import Slider from "../Slider/slider";

export default function PopularGoods() { 
    return <section className="mt-4 text-black" >
        <Element name="popularGoods">
           <h2 className="mb-4 text-2xl md:text-4xl text-center">Наші найпопулярніші товари</h2>
        </Element>
        <Slider />
        <Link href='/contacts' className="flex justify-center items-center max-w-xs mt-4 p-2 mx-auto border text-2xl md:text-4xl bg-slate-100 hover:bg-slate-200 transition-all">Замовити</Link>
    </section>
};