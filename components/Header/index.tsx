import { useEffect } from "react";
import { Link as RSLink, animateScroll as scroll} from 'react-scroll';
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/svg/logo.svg';
import hero from '../../public/images/svg/hero.svg';
import goods from '../../public/images/svg/goods.svg';
import useBreakpoints from '../../shared/hooks/useBreakpoints';

export default function Header({ home }: { home?: boolean }) {
    const { less768px, bigger768px, bigger1280px } = useBreakpoints();
    const scrollToTop = () => scroll.scrollToTop();
    return (<header className="fixed w-full min-h-[48px] top-0 left-0 p-1 flex justify-between items-center bg-slate-300 shadow-xl">
        <Link className="flex flex-col items-center" href="/">
            <Image priority src={logo} alt="Logo" width={30} height={30} />
            <span className="text-xs">СпортТовари</span>
            </Link>
        <nav className="ml-auto flex items-center gap-10">
            {home && (<div className="flex gap-5">
                    <div onClick={scrollToTop} className="flex flex-col items-center cursor-pointer">
                        {less768px && <Image src={hero} alt="Знайди свій стиль!" width={24} height={24} />}
                        <span className="text-xs">{less768px ? "Стиль" : 'Знайдіть свій стиль'}</span>
                    </div>
                <RSLink to='snickersContainer' smooth={true} duration={1700}>
                <div className="flex flex-col items-center cursor-pointer">
                    {less768px && <Image  src={goods} alt="Наші найпопулярніші товари" width={24} height={24} />}
                        <span className="text-xs">{ less768px ? "Товари" : "Найпопулярніші товари"}</span>
                </div>
                </RSLink>
            </div>)}
            <Link href='/contacts'>Контакти</Link>
        </nav>
    </header>);
}