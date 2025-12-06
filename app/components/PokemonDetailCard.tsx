"use client"; //
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
            <div className="flex flex-col items-center justify-center pt-20">
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
                        className={`className="
                                            w-full text-center
                                            bg-blue-50 text-blue-600 font-semibold
                                            px-2 py-2 rounded-lg
                                            border border-blue-100
                                            hover:bg-blue-600 hover:text-white
                                            transition-colors duration-200
                                " ${
                            isFavorite
                                ? "bg-gray-300  scale-110" 
                                : "bg-yellow-300 text-gray-400 scale-110" 
                        }`}
                    >
                        {isFavorite ? "Remove Favorite" : "Add to Favorite"}
                    </button>

                </div>
            </div>
        </>
      )
}
