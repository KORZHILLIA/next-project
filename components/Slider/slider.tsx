import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import Modal from 'react-modal';

import snickersArr from '@/helpers/snickers-array';
import { keenSliderOptions, handleSlides } from '../../helpers/keen-slider';
import { SliderState } from './sliderState.type';
import cross from '../../public/images/svg/cross.svg';

import useBreakpoints from '@/shared/hooks/useBreakpoints';
import SliderItems from '@/shared/components/SliderItems/sliderItems';

import 'keen-slider/keen-slider.min.css';
import { sliderModalStyle } from './slider-modal-styles';

export default function Slider() { 
  Modal.setAppElement('body');

  const [sliderRef] = useKeenSlider(
    { ...keenSliderOptions },
    [...handleSlides]
  );

  const {less768px, bigger1280px} = useBreakpoints();
  const initialState: SliderState = { isModalOpen: false, currentImg: {source: 'null', description: 'null', price: 0} };
  const [state, setState] = useState(initialState);

  const openModal = (img: StaticImageData, desc: string, price: number) => {
    setState({isModalOpen: true, currentImg: {source: img, description: desc, price}});
  };

  const closeModal = () => {
    setState(prevState => ({...prevState, isModalOpen: false}));
  };

  const { isModalOpen, currentImg } = state;
  const { source, description, price } = currentImg;

  return (<>
    <ul ref={sliderRef} className="keen-slider h-[300px] pb-4">
      <SliderItems images={snickersArr} onSliderClick={openModal} />
    </ul>
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel={description} style={sliderModalStyle}>
      <h2 className={`mb-1 ${less768px ? 'text-xl' : 'text-4xl'} text-center text-white`}>{description}</h2>
      <p className={`mb-2 ${less768px ? 'text-lg' : 'text-2xl'} text-center text-white`}>Ціна: <span className='text-yellow-300'>{price}</span> грн.</p>
      <Image className='mx-auto mb-2' src={source} alt={description} width={less768px ? 280 : (bigger1280px ? 400 : 360)} height={less768px ? 280 : (bigger1280px ? 400 : 360)} />
      <Link href='/contacts' className='flex justify-center items-center max-w-[200px] p-2 mx-auto border text-2xl md:text-4xl text-white bg-slate-500 hover:bg-slate-400'>Замовити</Link>
      <Image className='absolute top-1 right-1 cursor-pointer' onClick={closeModal} src={cross} alt='Close Button' width={less768px ? 16 : 20} height={less768px ? 16 : 20} />
    </Modal>
    </>
  )
};