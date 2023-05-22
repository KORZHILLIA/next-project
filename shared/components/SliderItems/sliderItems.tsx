import Image from "next/image";

import { SliderProps } from "./sliderProps.type";

export default function SliderItems(props: SliderProps) {
    const { images, alt } = props;
    const elements = images.map((image, idx) => <li key={`id-${idx}`} className="sliders relative">
        <Image fill className='object-contain' src={image} alt={`${alt}-${idx + 1}`}  />
    </li>);

    return <>{elements}</>;
}