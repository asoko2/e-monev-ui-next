import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import SidebarSubMenu from './SidebarSubMenu'
import routes from "../../routes/sidebar";
import { useRouter } from "next/router";

export default function Wrapper({ children }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <link rel="icon" href="/logo-e-monev.png" />
                <title>E-Monev</title>
            </Head>
            <div className="flex flex-col h-screen font-inter text-[14px] ">
                <header className="z-30 h-16 bg-primary text-white flex items-center justify-between fixed w-full shadow-md">
                    <div className="w-72 h-full bg-primary">
                        <Link href={'/dashboard'} className=" flex items-center h-full gap-2 pl-4">
                            <Image src={'/logo-white.png'} height={50} width={50} alt="logo" />
                            <p>E-Monev</p>
                        </Link>
                    </div>
                    <div className="bg-primary h-full flex items-center flex-auto px-8 justify-end">
                        <a href="#" className=" py-2 px-3 rounded-lg border border-white">ADMIN</a>
                    </div>
                </header>
                <div className="flex">
                    <aside className="w-72 bg-white text-primary overflow-y-auto h-full fixed shadow-md">
                        <div className="h-16 bg-primary text-white flex items-center gap-2 px-4">
                        </div>
                        <ul>
                            {routes.map((route) =>
                                route.routes ? (
                                    <SidebarSubMenu route={route} router={router} key={route.name} />
                                ) : (
                                    <Link href={route.path ?? '/'} key={route.name}>
                                        <li className={
                                            (router.pathname == route.path
                                                ? "border-l-[3px] border-primary px-3 text-primary text-opacity-100 font-semibold "
                                                : "text-primary text-opacity-70 px-[15px] ") +
                                            "inline-flex hover:border-l-[3px] hover:px-3 hover:border-primary items-center text-sm 2xl:py-4 py-3 text-primary hover:bg-primary-darker hover:bg-opacity-10 hover:text-opacity-100 hover:font-semibold transform transition duration-150 cursor-pointer w-full"
                                        }>
                                            <span className="flex-shrink-0 w-1/12">
                                                <i className={route.icon}></i>
                                            </span>
                                            <div className="flex-auto ml-2">{route.name}</div>
                                        </li>
                                    </Link>
                                ))}
                        </ul>
                    </aside>
                    <div className="ml-72 w-full h-full overflow-y-auto">
                        <main className="p-8 pt-[90px] w-full min-h-screen">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}