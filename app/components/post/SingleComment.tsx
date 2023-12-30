import { SingleCommentCompTypes } from "@/app/types";
import Link from "next/link";

export default function SingleComment({ comment, params }: SingleCommentCompTypes) {

    return (
        <>
            <div id="SingleComment" className="flex items-center justify-between px-8 mt-4">
                <div className="flex items-center relative w-full">
                    <Link href={`/profile/${comment.profile.user_id}`}>
                        <img 
                            className="absolute top-0 rounded-full lg:mx-0 mx-auto" 
                            width="40" 
                            src={comment.profile.image}
                        />
                    </Link>
                    <div className="ml-14 pt-0.5 w-full">
                        <div className="text-[18px] font-semibold flex items-center justify-between">
                            <span className="flex items-center">
                                {comment?.profile?.name} - 
                                <span className="text-[12px] text-gray-600 font-light ml-1">
                                    {comment?.created_at}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}