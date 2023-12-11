"use client"

import ClientOnly from "@/app/components/ClientOnly";
import MainLayout from "@/app/layouts/MainLayout";
import { ProfilePageTypes } from "@/app/types";

export default function Profile({ params }: ProfilePageTypes) {
    const currentProfile = {
        id: '123',
        user_id: '123',
        name: 'boomboxik',
        image: 'https://placehold.co/200',
        bio: 'this is the bio section!'
    }
    return (
        <>
            <MainLayout>
                <div className="pt-[90px] ml-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 w-[calc(100%-90px)] pr-3 max-w-[1800px] 2xl:mx-auto">
                    <div className="flex w-[calc(100vw-230px)]">
                        <ClientOnly>
                            {true ? (
                                <img className="w-[120px] min-w-[120px] rounded-full" src={currentProfile.image} />
                            ) : (
                                <div className="min-w-[150px] h-[120px] bg-gray-200 rounded-full" />
                            )}
                        </ClientOnly>

                        <div className="ml-5 w-full">
                            <ClientOnly>
                                {currentProfile?.name ? (
                                    <div>
                                        <p className="text-[30px] font-bold truncate">{currentProfile?.name}</p>
                                        <p className="text-[18px] truncate">{currentProfile?.name}</p>
                                    </div>
                                ) : (
                                    <div className="h-[60px]" />
                                )}
                            </ClientOnly>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}