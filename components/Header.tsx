'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from '@/public/images/logo.jpg'

import MobileMenu from "./MobileMenu";

import PopOver from "./PopOver";

import { ChevronDownIcon, LogIn } from "lucide-react";
import { Dialog, Disclosure } from '@headlessui/react';
import { XMarkIcon } from "@heroicons/react/20/solid";

import { products , CallToAction } from "./share/popItem";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Links } from "./share/Links";

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
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Booking.com</span>
                            <Image src={logo} className="h-8 w-auto" alt="booking.com" />
                        </Link>
                        <Button className="-m-2.5 rounded-sm p-2.5 text-white" onClick={()=> setMobileMenuOpen(false)}>
                            <span className="sr-only">Close Menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Button>
                    </div>
                    <div className="flow-root">
                        <div className="divide-y divide-gray-500/10">
                            <div className="space-y-8">
                                <Disclosure as="div" className="-mx-3">
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                                                Stays
                                                <ChevronDownIcon className={cn("h-5 w-5 flex-none", open ? "rotate-180" : "")} aria-hidden="true" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel>
                                                {[...products , ...CallToAction].map(item => (
                                                    <Disclosure.Button key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800">
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <div className="flex flex-col ">
                                    {Links.map(item => (
                                        <Link href={item.href} key={item.name} className="text-white font-semibold text-md my-4 hover:bg-blue-800 p-2 rounded-lg">{item.name}</Link>
                                    ))}
                                </div>
                                <Link href="#" className="text-sm font-semibold leading-6 text-white flex gap-x-2 items-center justify-between">
                                    Log in <LogIn aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}