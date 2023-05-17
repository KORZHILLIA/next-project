import Image from 'next/image';
import snicker1 from '../../../../public/images/snickers/snicker_1.jpg';
import snicker2 from '../../../../public/images/snickers/snicker_2.jpg';
import snicker3 from '../../../../public/images/snickers/snicker_3.jpg';
import snicker4 from '../../../../public/images/snickers/snicker_4.jpg';
import snicker5 from '../../../../public/images/snickers/snicker_5.jpg';
import snicker6 from '../../../../public/images/snickers/snicker_6.jpg';

export default function SliderItems() {
    const snickersArr = [snicker1, snicker2, snicker3, snicker4, snicker5, snicker6];
    const elements = snickersArr.map((snicker, idx) => <div key={`id-${idx}`} className="keen-slider__slide">
        <Image fill style={{ objectFit: "contain"}} src={snicker} alt={`${snicker}`}  />
    </div>);
    return <>{elements}</>
}