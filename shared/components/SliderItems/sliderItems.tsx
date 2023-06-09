import Image from "next/image";

import { SliderProps } from "./sliderProps.type";

export default function SliderItems(props: SliderProps) {
    
    const { images, onSliderClick } = props;

    const elements = images.map(({imgSource, imgDescription, price}, idx) => <li onClick={() => onSliderClick(imgSource, imgDescription, price)} key={`id-${idx}`} className="sliders relative cursor-pointer">
        <Image fill className='object-contain' src={imgSource} alt={imgDescription} />
    </li>);

    return <>{elements}</>;
}