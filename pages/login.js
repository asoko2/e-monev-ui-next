import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Login() {
    return (
        <>
            <div className="min-h-screen w-full flex flex-col items-center 2xl:pt-32 py-12 font-poppins">
                <Head>
                    <title>Login | E-Monev</title>
                </Head>
                <div className="bg-white shadow-lg rounded-md flex flex-col items-center pt-8 pb-12 px-8 2xl:w-96 xl:w-[30%] lg:w-3/12 bg-opacity-30 backdrop-blur-[2px]" data-aos="fade-up" data-aos-duration="700">
                    <Link href={'/'}>
                        <Image src={'/logo-e-monev.png'} height={120} width={120} alt="logo" className="" />
                    </Link>
                    <div className="p-3" />
                    <p className="text-base font-bold text-center">Selamat datang di Aplikasi E-Monev</p>
                    <hr className="border border-gray-100 w-full my-3" />
                    <p className="text-base text-center">Silahkan login untuk melanjutkan</p>
                    <div className="pb-6" />
                    <div className="font-nunito w-full">
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="username"
                                placeholder=" "
                                required
                                className="pt-2 pb-2 block w-full px-3 mt-0 bg-transparent border outline-none focus:outline-none focus:ring-0 focus:border-primary border-primary border-opacity-30 rounded-[4px] transform transition-all duration-[175ms]"
                            />
                            <label htmlFor="username" className="absolute duration-300 top-2 left-3 -z-1 origin-0 text-gray-500">Username</label>
                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                        </div>
                        <div className="pb-2" />
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="password"
                                name="password"
                                placeholder=" "
                                required
                                className="pt-2 pb-2 block w-full px-3 mt-0 bg-transparent border outline-none focus:outline-none focus:ring-0 focus:border-primary border-primary border-opacity-30 rounded-[4px] transform transition-all duration-[175ms]"
                            />
                            <label htmlFor="password" className="absolute duration-300 top-2 left-3 -z-1 origin-0 text-gray-500">Password</label>
                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                        </div>
                    </div>
                    <div className="pb-1" />
                    <button type="submit" className="bg-primary text-white px-3 py-2 rounded-[4px] w-full font-nunito hover:bg-opacity-80 focus-visible:bg-opacity-90 focus-visible:ring-0 focus-visible:outline-none transform transition-colors duration-[175ms]">LOGIN</button>
                </div>
                <div className="p-2" />
                <p>2022 &copy; Bappeda Kab. Bojonegoro</p>
            </div>
        </>
    )
}