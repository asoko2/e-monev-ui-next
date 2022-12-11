import Head from "next/head"
import Wrapper from "./layout/wrapper"

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard | E-Monev</title>
            </Head>
            <div className="w-full bg-white shadow-md p-4 mb-4">
                <h3 className="font-bold text-xl">Selamat datang di E-Monev</h3>
            </div>
        </>
    )
}

Dashboard.getLayout = function getLayout(page) {
    return (
        <Wrapper>
            {page}
        </Wrapper>
    )
}