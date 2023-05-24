import { StaticImageData } from "next/image";

export type SliderState = {
  isModalOpen: boolean,
  currentImg: {
    source: StaticImageData | string,
    description: string,
    price: number,
  },
}