"use client";
import Header from "@/app/components/Header";
import {usePokemonState} from "@/app/store/store";
import Link from "next/link";
import PokemonDetailCard from "@/app/components/PokemonDetailCard";

export default function FavouritesPage() {
    const {favorites}  = usePokemonState();
    return (
        <>
            <Header />
            <div className="p-8 min-h-screen bg-gray-50">

                {favorites.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500 mb-4">No pokemon yet</p>
                        <Link
                            href="/pokemon"
                            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                        >
                            Add Pokemon
                        </Link>
                    </div>
                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {favorites.map((pokemon) => (
                            <div key={pokemon.name} className="w-full transform hover:scale-105 transition duration-300">
                                <PokemonDetailCard pokemon={pokemon} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
