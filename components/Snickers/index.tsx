import { Element } from "react-scroll";
import Slider from "../shared/Slider/Slider";
export default function Snickers() { 
    return <section className="mt-4" >
        <Element name="snickersContainer">
            Наші найпопулярніші товари
        </Element>
        <Slider />
    </section>
};