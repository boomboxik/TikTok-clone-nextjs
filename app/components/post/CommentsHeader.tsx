"use client"

import { CommentsHeaderCompTypes } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentsHeader({ post, params }: CommentsHeaderCompTypes) {
    
    const router = useRouter()
    const [hasClickedLike, setHasClickedLike] = useState<boolean>(false)
    const [isDeleteing, setIsDeleteing] = useState<boolean>(false)
    const [userLiked, setUserLiked] = useState<boolean>(false)

    return (
        <>
            <div className="flex items-center justify-between px-8">
                <div className="flex items-center">
                    <Link href={`/profile/${post?.user_id}`}>
                        {post?.profile.image ? (
                            <img className="rounded-full lg:mx-0 mx-auto" width="40" src={post?.profile.image} />
                        ) : (
                            <div className="w-[40px] h-[40px] bg-gray-200 rounded-full"/>
                        )}
                    </Link>

                    <div className="ml-3 pt-0.5">
                        <Link 
                            href={`/profile/${post?.user_id}`} 
                            className="relative z-10 text-[17px] font-semibold hover:underline"
                        >
                            {post?.profile.name}
                        </Link>

                        <div className="relative z-0 text-[13px] -mt-5 font-light">
                            {post?.profile.name}
                            <span className="relative -top-[2px] text-[30px] pl-1 pr-0.5 ">.</span>
                            <span className="font-medium">{post?.created_at}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}