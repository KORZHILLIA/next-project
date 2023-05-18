import { Link as RSLink, animateScroll as scroll} from 'react-scroll';
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/images/svg/logo.svg';
import hero from '../../../public/images/svg/hero.svg';
import goods from '../../../public/images/svg/goods.svg';
import useBreakpoints from '../../hooks/useBreakpoints';

export default function Header({ home }: { home?: boolean }) {
    const { less768px } = useBreakpoints();
    const scrollToTop = () => scroll.scrollToTop();
    return (<header className={`fixed w-full min-h-[48px] top-0 left-0 p-1 sm:p-2 flex ${home ? 'justify-between' : 'justify-center'} items-center bg-slate-300 shadow-xl z-20`}>
        <Link className={`flex ${home && 'flex-col'} ${!home && 'gap-4'} items-center`} href="/">
            <Image priority src={logo} alt="Logo" width={less768px ? 30 : 36} height={less768px ? 30 : 36} />
            <span className="text-xs md:text-xl">СпортТовари</span>
            </Link>
        {home && <nav className="ml-auto flex items-center gap-10">
                <div onClick={scrollToTop} className="flex flex-col items-center cursor-pointer">
                    {less768px && <Image src={hero} alt="Знайди свій стиль!" width={24} height={24} />}
                    <span className={`block ${!less768px && 'p-2'} md:shadow-sm md:hover:shadow-md transition-all text-xs md:text-xl`}>{less768px ? "Стиль" : 'Знайди свій стиль!'}</span>
                </div>
                <RSLink to='snickersContainer' smooth={true} duration={1700}>
                    <div className="flex flex-col items-center cursor-pointer">
                        {less768px && <Image src={goods} alt="Наші найпопулярніші товари" width={24} height={24} />}
                        <span className={`block ${!less768px && 'p-2'} md:shadow-sm md:hover:shadow-md transition-all text-xs md:text-xl`}>{less768px ? "Товари" : "Найпопулярніші товари"}</span>
                    </div>
                </RSLink>
        </nav>}
    </header>);
}