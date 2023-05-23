import { StaticImageData } from "next/image";
type Slider = {
    imgSource: StaticImageData,
    imgDescription: string,
};

export type SliderProps = {
    images: Slider[],
    onSliderClick: Function,
};