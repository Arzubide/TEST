"use client";
import Link from "next/link";


export default function Header() {

    return (
        <>
            <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">

                    <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition">
                        PokeApp
                    </Link>

                    <nav className="flex gap-6 items-center">
                        <Link href="/" className="hover:underline text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/pokemon" className="hover:underline text-sm font-medium">
                            Pokemon
                        </Link>
                        <Link href="/favorites" className="hover:underline text-sm font-medium">
                            Favorites list
                        </Link>

                    </nav>
                </div>
            </header>
        </>
    )
}
