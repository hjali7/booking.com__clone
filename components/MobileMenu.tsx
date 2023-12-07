'use client'

import { useState } from "react";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";

interface props {
    onclick : ()=> void ;
}

export default function MobileMenu (
    {onclick}: props
) {
    return (
        <Button className="-m-2.3 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={onclick}>
            <span className="sr-only">Open main menu</span>
            <Menu />
        </Button>
    )
}

