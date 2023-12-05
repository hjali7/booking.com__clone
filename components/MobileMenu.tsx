'use client'

import { useState } from "react";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";

type props = {
    onClick? : ()=> void
}

export default function MobileMenu (
    {onClick}: props
) {
    return (
        <Button className="-m-2.3 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={()=> onClick}>
            <span className="sr-only">Open main menu</span>
            <Menu />
        </Button>
    )
}