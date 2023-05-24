import { StaticImageData } from "next/image";
type Slider = {
    imgSource: StaticImageData,
    imgDescription: string,
    price: number,
};

export type SliderProps = {
    images: Slider[],
    onSliderClick: Function,
};