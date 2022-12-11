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
            <div className="flex h-screen font-inter text-[14px] ">
                <aside className="w-72 bg-white text-primary overflow-y-auto h-full">
                    <div className="h-16 bg-primary text-white flex items-center gap-2 px-4">
                        <Image src={'/logo-white.png'} width={50} height={50} alt="logo" />
                        <h1 className="font-semibold text-base">E-Monev</h1>
                    </div>
                    <ul>
                        {routes.map((route) =>
                            route.routes ? (
                                <SidebarSubMenu route={route} router={router} key={route.name} />
                            ) : (
                                <Link href={route.path ?? '/'} key={route.name}>
                                    <li className={
                                        (router.pathname == route.path
                                            ? "border-l-[3px] border-white px-3 text-primary text-opacity-100 font-semibold "
                                            : "text-primary text-opacity-70 px-[15px] ") +
                                        "inline-flex hover:border-l-[3px] hover:px-3 hover:border-white items-center text-sm 2xl:py-4 py-3 text-primary hover:bg-primary-darker hover:bg-opacity-10 hover:text-opacity-100 hover:font-semibold transform transition duration-150 cursor-pointer w-full"
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
                <div className="w-full h-full overflow-y-auto">
                    <header className="h-16 bg-primary text-white flex items-center justify-between px-6 fixed w-full">
                        <p>TES</p>
                        <p>ADMIN</p>
                    </header>
                    <main className="p-8 pt-[90px] w-full min-h-screen">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cum rerum libero voluptatum veritatis at? Perferendis facere dolorem culpa ad harum architecto. Sequi nostrum adipisci, laudantium ullam quod accusantium aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nihil nobis quidem deleniti sit repellat modi suscipit magni quibusdam, iusto dolorum tempore itaque laudantium odio! Quasi natus alias fuga ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi adipisci quis? Error repudiandae doloribus adipisci sit optio rem id non similique ad. Numquam aperiam nulla molestias esse similique itaque.</p>
                    </main>
                </div>
            </div>
        </>
    )
}