import SliderItems from "./SliderItems/SliderItems";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import snicker1 from '../../../public/images/snickers/snicker_1.jpg';

export default function Slider() { 
    return <Carousel>
        <div>
            <img src='../../../public/images/snickers/snicker_1.jpg' />
            <p></p>
        </div>
    </Carousel>
};