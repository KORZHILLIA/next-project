import { Element } from "react-scroll";

import Image from "next/image";

import useBreakpoints from "../../shared/hooks/useBreakpoints";
import hero from '../../public/images/hero/hero.webp';

import { paragraphStyle } from "./hero-styles";

export default function Hero() {
    const { bigger1280px } = useBreakpoints();

    return (
        <section className="pt-20 md:pt-24">
            <div className="container mx-auto px-4">
        <Element name="hero">
            {!bigger1280px && <h1 className="pt-2 text-4xl md:text-6xl mb-1 md:mb-3 text-center">Знайди свій стиль!</h1>}
            </Element>
            <div className={`relative w-full h-96 md:h-[600px] mx-auto pb-2 ${bigger1280px && 'pt-2'} pointer-events-none`}>
                <Image className="object-cover" priority src={hero} alt="Girl is jumping" fill />
                {bigger1280px && <h1 className="absolute top-[calc(50%-30px)] left-[50%] translate-x-[-50%] text-7xl text-sky-600">Знайди <span className="text-yellow-200">свій </span>стиль!</h1>}
        </div>
            <p className={paragraphStyle}>Ласкаво просимо в дисконт магазин «СпортТовари».
                На сайті ви можете придбати одяг для занять спортом, активного відпочинку і повсякденного життя
                від популярних світових брендів. Ми - спеціалізований інтернет-магазин одягу, аксесуарів та інших товарів для спорту.
                В каталозі представлено понад 5 000 товарів для спорту, і він щодня поповнюється новими колекціями.
                Це дозволяє запропонувати широкий вибір спортивних товарів, навіть для найвимогливiшого покупця.</p>
            <p className={paragraphStyle}>Сьогодні одяг для спорту високої якості купити не так просто.
                Якщо ви не хочете стати жертвою шахрайства, вам сюди. Ми реалізуємо тільки
                оригінальні колекції. Висока якість товару, за рахунок постійного вдосконалення технологій
                виробництва дають Вам можливість максимально насолоджуватися зручністю, навіть при дуже тривалому користуванні.</p>
            <p className={paragraphStyle}>Доставка по всій території України. Не важливо в якому населеному пункті Ви живете:
                Сєвєродонецьк, Павлоград, Бровари, Бердянськ, Нікополь, Слов'янськ, Мелітополь, Краматорськ, Біла Церква, Кременчук,
                Кам'янське, Кам'янець-Подільський, Лисичанськ, Олександрія, Костянтинівка, Алчевськ, Конотоп, Умань, Бердичів,
                Бердичів, Шостка, Ізмаїл, - наш інтернет магазин доставить покупку зручним способом: кур'єром, "Новою поштою", самовивозом.</p>
                </div>
        </section>)
 };