// import SliderItems from "./SliderItems/SliderItems";
import SliderItems from '@/shared/components/SliderItems/sliderItems';
import snickersArr from '@/helpers/snickers-array';
import {keenSliderOptions, handleSlides } from '../../helpers/keen-slider';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function Slider() { 
  const [sliderRef] = useKeenSlider(
    {...keenSliderOptions},
    [...handleSlides]
  )

  return (
    <div ref={sliderRef} className="keen-slider h-[300px]">
      <SliderItems images={snickersArr}/>
    </div>
  )
};