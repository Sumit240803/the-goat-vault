import Navbar from "@/app/components/General/Navbar";

export default function Layout({children}){
    return (
        <>
        <Navbar/>
        <main className="">

        {children}
        </main>
        </>
    )
}