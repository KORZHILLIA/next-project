import { useKeenSlider } from 'keen-slider/react';

import snickersArr from '@/helpers/snickers-array';
import { keenSliderOptions, handleSlides } from '../../helpers/keen-slider';

import SliderItems from '@/shared/components/SliderItems/sliderItems';

import 'keen-slider/keen-slider.min.css';

export default function Slider() { 
  const [sliderRef] = useKeenSlider(
    {...keenSliderOptions},
    [...handleSlides]
  )

  return (
    <ul ref={sliderRef} className="keen-slider h-[300px] pb-4">
      <SliderItems images={snickersArr}/>
    </ul>
  )
};