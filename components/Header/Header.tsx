import { useEffect } from "react";
import { Link as RSLink, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Link from "next/link";

export default function Header({ to1 }: {to1: string}) {
    // useEffect(() => { 
    //     Events.scrollEvent.register('begin', function(to, element) {
    //   console.log('begin', arguments);
    //     });
    //     Events.scrollEvent.register('end', function(to, element) {
    //   console.log('end', arguments);
    //     });
    //     scrollSpy.update();
    //     return () => {
    //         Events.scrollEvent.remove('begin');
    // Events.scrollEvent.remove('end');
    //      }
    // }, []);

    const scrollToBottom = () => {
    scroll.scrollToBottom();
  }

    return (<header>
        <nav className="flex">
            <RSLink to='snickersContainer' containerId="snickersContainer" smooth={true} duration={500}>
                Знайдіть свій стиль
            </RSLink>
            <RSLink to={to1} smooth={true} duration={500} containerId="snickersContainer">
                {/* <Link href='/'>Найпопулярніші товари</Link> */}
                Найпопулярніші товари
                </RSLink>
            <Link href='/contacts'>Контакти</Link>
        </nav>
    </header>);
}