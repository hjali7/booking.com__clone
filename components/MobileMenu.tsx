'use client'

import { useState } from "react";

import Link from "next/link";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileMenu () {

    const [MobileMenuOpen , setMobileMenuOpen] = useState(false)
    
    return (
        <Button className="-m-2.3 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Menu />
        </Button>
    )
}