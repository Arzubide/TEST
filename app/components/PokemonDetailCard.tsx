"use client"; //
import Link from "next/link";
import {PokemonDetail} from "@/app/schemas/pokemonSchemas";
import {useState,useEffect} from "react";
import {usePokemonState} from "@/app/store/store";


interface PokemonDetailCardProps {
    pokemon: PokemonDetail;
}

export default function PokemonDetailCard({ pokemon }: PokemonDetailCardProps) {
    const {favorites,handleClickFavorite} = usePokemonState()
    const isFavorite = favorites.some(fav => fav.name === pokemon.name)

    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    }, [setMounted])
    if (!mounted) return null;


        return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-8">
                <div className="bg-white shadow-xl rounded-lg p-8 max-w-sm w-full text-center border">

                    <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>

                    {pokemon.sprites.front_default && (
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            className="w-48 h-48 mx-auto object-contain"
                        />
                    )}

                    <div className="flex justify-center gap-2 mb-4">
                        {pokemon.types.map((t) => (
                            <span
                                key={t.type.name}
                                className="px-3 py-1 bg-gray-200 rounded-full text-sm capitalize"
                            >
                                {t.type.name}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-600 mb-6">
                        Weight: <span className="font-bold">{pokemon.weight / 10} kg</span>
                    </p>

                    <button
                        onClick={() => handleClickFavorite(pokemon)}
                        className={`rounded-2xl hover: cursor-pointer ${
                            isFavorite
                                ? "bg-gray-300  scale-110" 
                                : "bg-yellow-300 text-gray-400" 
                        }`}
                    >
                        {isFavorite ? "Remove Favorite" : "Add to Favorite"}
                    </button>
                    <Link
                        href="/pokemon"
                        className="text-blue-500 hover:underline text-sm"
                    >
                        ← Volver al listado
                    </Link>
                </div>
            </div>
        </>
      )
}
