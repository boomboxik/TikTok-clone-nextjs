import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavMain() {
    const pathname = usePathname()
    return(
        <>
            <div
                id="SideNavMain" 
                className={`
                    fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
                    ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}
            `}
            >

            </div>
        </>
    )    
}