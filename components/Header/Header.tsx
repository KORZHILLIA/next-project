import Link from "next/link";

export default function Header() {
    return (<header>
        <nav className="flex">
            <Link href='/'>Знайдіть свій стиль</Link>
            <Link href='/'>Найпопулярніші товари</Link>
            <Link href='/contacts'>Контакти</Link>
        </nav>
    </header>);
}