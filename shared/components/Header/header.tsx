import { useContext } from 'react';
import { Link as RSLink, animateScroll as scroll } from 'react-scroll';

import Link from "next/link";
import Image from "next/image";

import ThemeSwitcher from '../ThemeSwitcher/themeSwitcher';
import { ThemeContext } from '@/context/themeContext';
import { ThemeContextType } from '@/context/themeContext.type';
import useBreakpoints from '../../hooks/useBreakpoints';

import logo from '../../../public/images/svg/logo.svg';
import hero from '../../../public/images/svg/hero.svg';
import goods from '../../../public/images/svg/goods.svg';
import { navLiStyle } from './header-styles';

export default function Header({ home }: { home?: boolean }) {
    const { less768px } = useBreakpoints();

    const {isDark} = useContext(ThemeContext) as ThemeContextType;
    const scrollToTop = () => scroll.scrollToTop();
    return (<header className={`fixed w-full flex items-center min-h-[54px] top-0 left-0 ${isDark ? 'bg-slate-500' : 'bg-slate-300 shadow-xl'} z-20`}>
        <div className='container mx-auto w-full p-2 lg:px-32 flex justify-between items-center text-black'>
        <Link className={`flex ${home && 'flex-col'} ${!home && 'gap-4'} items-center`} href="/">
            <Image priority src={logo} alt="Logo" width={less768px ? 30 : 36} height={less768px ? 30 : 36} />
            <span className="text-xs md:text-xl">СпортТовари</span>
        </Link>
        {home && <nav className="ml-auto mr-4">
                <ul className="flex items-center gap-6">
                    <li onClick={scrollToTop} className={navLiStyle}>
                    {less768px && <Image src={hero} alt="Знайди свій стиль!" width={24} height={24} />}
                    <span className={`block ${!less768px && 'p-2'} md:shadow-md md:hover:shadow-lg transition-all text-xs md:text-xl`}>{less768px ? "Стиль" : 'Знайди свій стиль!'}</span>
                    </li>
                    <li>
                <RSLink to='popularGoods' offset={-60} smooth={true} duration={1700}>
                    <div className={navLiStyle}>
                        {less768px && <Image src={goods} alt="Наші найпопулярніші товари" width={24} height={24} />}
                        <span className={`block ${!less768px && 'p-2'} md:shadow-md md:hover:shadow-lg transition-all text-xs md:text-xl`}>{less768px ? "Товари" : "Найпопулярніші товари"}</span>
                    </div>
                        </RSLink>
                        </li>
                </ul>
            </nav>}
            <ThemeSwitcher />
            </div>
    </header>);
}