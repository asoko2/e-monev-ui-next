import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "../../routes/sidebar";
import SidebarSubmenu from "./SidebarSubMenu";

export default function Sidebar() {
    const router = useRouter();

    return (
        <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-primary lg:block  shadow-md relative">
            {/* <div className="bg-primary bg-opacity-30 backdrop-blur-sm z-50 w-64 h-[56px]"> */}
            {/* <div className="bg-primary bg-opacity-30 h-14 fixed"> */}
                {/* <Link className="flex items-center gap-2 px-3 h-[56px] transform transition-all font-poppins duration-[100ms] rounded-[4px]" href={'./dashboard'}>
                    <Image src={'/logo-white.png'} width={30} height={30} alt="" />
                    <p className="font-semibold text-white hover:text-black">E-Monev</p>
                </Link> */}
            {/* </div> */}
            <div className="flex flex-col mx-auto">
                <ul>
                    {routes.map((route) =>
                        route.routes ? (
                            <SidebarSubmenu route={route} router={router} key={route.name} />
                        ) : (
                            <Link href={route.path ?? '/'} key={route.name}>
                                <li className={
                                    (router.pathname == route.path
                                        ? "border-l-[3px] border-white px-3 text-white text-opacity-100 font-semibold "
                                        : "text-white text-opacity-70 px-[15px] ") +
                                    "inline-flex hover:border-l-[3px] hover:px-3 hover:border-white items-center text-sm 2xl:py-4 py-3 text-white hover:bg-primary-darker hover:bg-opacity-10 hover:text-opacity-100 hover:font-semibold transform transition duration-150 cursor-pointer w-full"
                                }>
                                    <span className="flex-shrink-0 w-1/12">
                                        <i className={route.icon}></i>
                                    </span>
                                    <div className="flex-auto ml-2">{route.name}</div>
                                </li>
                            </Link>
                        ))}
                </ul>
            </div>
        </aside>
    )
}
