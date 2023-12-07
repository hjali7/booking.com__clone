'use client'

// import * as React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '@/public/images/logo.jpg'

import MobileMenu from "./MobileMenu";

import PopOver from "./PopOver";

import { LogIn, Menu } from "lucide-react";
import { Dialog } from '@headlessui/react';
import { Button } from "./ui/button";

export default function Header () {
    const [MobileMenuOpen , setMobileMenuOpen] = useState(false)
    const handleMenu = () => {
        setMobileMenuOpen(!MobileMenuOpen)
    }
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
                    <MobileMenu onclick={handleMenu}/>
                </div>
                <PopOver />
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="#" className="text-sm font-semibold leading-6 text-white flex gap-x-2 items-center justify-center">
                        Log in <LogIn aria-hidden="true" />
                    </Link>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={MobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className='fixed inset-0 z-10'/>
                <Dialog.Panel className="bg-[#013b94] fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                </Dialog.Panel>
            </Dialog>
        </header>
    )
}