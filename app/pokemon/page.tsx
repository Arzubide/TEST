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


