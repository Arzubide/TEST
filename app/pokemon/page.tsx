import Link from "next/link";
import {getPokemons} from "@/app/Services/recipieServices";
import Header from "@/app/components/Header";


export default async function PokemonPage() {
    const data = await getPokemons();

    return (
        <>
            <Header/>
            {data.results.map((pokemon) => {
                return (
                    <div  key={pokemon.name} >

                        <div  className="
                                        bg-white rounded-xl shadow-sm border border-gray-100 p-6
                                        flex flex-col items-center justify-between
                                        transition-all duration-300 ease-in-out
                                        hover:shadow-xl hover:-translate-y-1 hover:border-blue-200
                         "
                        >
                            <h2 className="text-xl font-bold capitalize text-gray-800 mb-6">{pokemon.name}</h2>
                            <Link
                                href={`/pokemon/${pokemon.name}`}
                                className="
                                            w-full text-center
                                            bg-blue-50 text-blue-600 font-semibold
                                            px-4 py-2 rounded-lg
                                            border border-blue-100
                                            hover:bg-blue-600 hover:text-white
                                            transition-colors duration-200
                                "
                            >
                                Ver detalles
                            </Link>
                        </div>
                    </div>

                )
            })}
        </>
    )
}


