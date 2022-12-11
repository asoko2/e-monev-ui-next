import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "../../routes/sidebar";
import SidebarSubmenu from "./SidebarSubMenu";

export default function Sidebar() {
    const router = useRouter();

    return (
        <div className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-primary lg:block text-white shadow-md">
            <div className="h-[56px] bg-red-500">
                TES
            </div>
        </div>
    )
}
