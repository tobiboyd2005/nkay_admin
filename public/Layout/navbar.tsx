"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import nkay from "../../../public/nkay.png";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";


// Function to generate a random color
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default function Navbar() {

    return (
        <div className="h-24 w-full grid grid-rows-1 sticky grid-cols-3 items-center px-8">
            <div className="justify-self-start">
                <Image src={nkay} alt="nkay image" width={160} height={160} />
            </div>
            <div className="justify-self-center">
                <Link href="/docs" className={cn(navigationMenuTriggerStyle(), "font-bold")}>
                    Home
                </Link>
                <Link className={cn(navigationMenuTriggerStyle(), "font-bold")} href="/docs">
                    Collections
                </Link>
                <Link className={cn(navigationMenuTriggerStyle(), "font-bold")} href="/docs">
                    Contacts
                </Link>
            </div>
            <div className="justify-self-end flex items-center">
                <Button><ShoppingBag/></Button>
                {/* {session && session.user ? (
                    <>
                        <div
                            className="flex items-center justify-center rounded-full"
                            style={{
                                height: '40px',
                                width: '40px',
                                backgroundColor: getRandomColor(),
                                color: 'white',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                marginRight: '8px',
                            }}
                        >
                            {session?.user?.name?.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-bold text-black">{session.user.name}</span>
                    </>
                ) : (
                    <SignUpModal/>
                )} */}
            </div>
        </div>
    );
}
