import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./sidebar";

export default function Wrapper({ children }) {
    return (
        <>
            <div className="flex flex-col h-screen font-inter text-[14px] ">
                <nav className="h-[3.5rem] 2xl:h-[4.5rem] flex-initial flex items-center bg-white w-full border-b border-primary">
                    <Link className="flex items-center gap-2 px-3 py-2 transform transition-all duration-[100ms] rounded-[4px]" href={'./dashboard'}>
                        <Image src={'/logo-e-monev.png'} width={30} height={30} alt="" />
                        <p className="font-semibold text-primary hover:text-black">E-Monev</p>
                    </Link>
                </nav>
                <div className="flex flex-1 h-full overflow-y-auto">
                    <Sidebar/>
                    <main className="px-6 pt-6 mb-8 h-full w-full bg-red-500">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}