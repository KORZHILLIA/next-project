import Image from "next/image";
import { StaticImageData } from "next/image";

type SliderProps = {
    images: StaticImageData[]
};

export default function SliderItems(props: SliderProps) {
    const elements = props.images.map((image, idx) => <div key={`id-${idx}`} className="sliders relative">
        <Image fill className='object-contain' src={image} alt={`image-${idx + 1}`}  />
    </div>);
    return <>{elements}</>;
}