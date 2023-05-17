import Link from "next/link";
import { Element } from "react-scroll";
import Slider from "../shared/Slider/Slider";
export default function Snickers() { 
    return <section className="mt-4" >
        <Element name="snickersContainer">
           <h2 className="mb-4 text-2xl text-center">Наші найпопулярніші товари</h2>
        </Element>
        <Slider />
        <Link href='/contacts' className="flex justify-center items-center max-w-[50%] mt-4 p-2 mx-auto border text-2xl bg-slate-100 hover:bg-slate-200 transition-all">Замовити</Link>
    </section>
};