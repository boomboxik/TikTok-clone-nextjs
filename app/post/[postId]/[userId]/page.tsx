"use client"

import { PostPageTypes } from "@/app/types";
import { useRouter } from "next/navigation";

export default function Post({ params }: PostPageTypes) {
    const router = useRouter

    return (
        <>
            <div
                id="PostPage" 
                className="lg:flex justify-between w-full h-screen bg-black overflow-auto"
            >
                <div className="lg:w-[calc(100%-540px)] h-full relative">

                </div>
            </div>
        </>
    )

}