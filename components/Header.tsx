import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.jpg'
import MobileMenu from "./MobileMenu";

export default function Header () {
    return (
        <header className="bg-[#013b94]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">                
                <div className="flex lg:flex-1">
                    <Link href='/' className="-m-1.5 p-1.5 w-auto">
                        <span className="sr-only">Booking.com</span>
                        <Image src={logo} alt="Booking.com" height={120}/>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <MobileMenu />
                </div>
            </nav>
        </header>
    )
}