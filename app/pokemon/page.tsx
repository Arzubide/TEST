import Link from "next/link";
import {getPokemons} from "@/app/Services/recipieServices";


export default async function PokemonPage() {
    const data = await getPokemons();

    return (
        <>
            {data.results.map((pokemon) => {
                return (
                    <div key={pokemon.name}>
                        <h2 className="text-xl font-semibold capitalize mb-4">{pokemon.name}</h2>
                        <Link
                            href={`/pokemon/${pokemon.name}`}
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium"
                        >
                            Ver detalles
                        </Link>
                    </div>

                )
            })}
        </>
    )
}



    // {data.results.map((pokemon, index) => {
    //     // Un pequeño truco para sacar el ID de la URL y usarlo (opcional, pero ayuda)
    //     // url ejemplo: https://pokeapi.co/api/v2/pokemon/1/
    //     const id = pokemon.url.split('/').filter(Boolean).pop();
    //
    //     return (
    //         <div key={pokemon.name} className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
    //             <p className="text-gray-500 text-xs mb-2">#{id}</p>
    //             <h2 className="text-xl font-semibold capitalize mb-4">{pokemon.name}</h2>
    //
    //             <Link
    //                 href={`/pokemon/${pokemon.name}`}
    //                 className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium"
    //             >
    //                 Ver detalles
    //             </Link>
    //         </div>
    //     )
    // })}
