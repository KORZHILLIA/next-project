import Image from "next/image";

import { SliderProps } from "./sliderProps.type";

export default function SliderItems(props: SliderProps) {
    const { images } = props;
    const elements = images.map(({imgSource, imgDescription}, idx) => <li key={`id-${idx}`} className="sliders relative">
        <Image fill className='object-contain' src={imgSource} alt={imgDescription}  />
    </li>);

    return <>{elements}</>;
}