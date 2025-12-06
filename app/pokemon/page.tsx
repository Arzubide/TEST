import Link from "next/link";
import {getPokemons} from "@/app/Services/recipieServices";
import Header from "@/app/components/Header";

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PokemonPage({ searchParams }: Props) {


    const resolvedSearchParams = await searchParams;
    const offset = Number(resolvedSearchParams.offset) || 0;
    const data = await getPokemons(offset);
    const nextOffset = offset + 20
    const prevOffset = offset - 20
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
                                See details
                            </Link>
                        </div>
                    </div>

                )
            })}
            <div className="flex justify-center gap-4">
                {/* Botón Anterior: Solo se muestra si la API dice que hay 'previous' */}
                {data.previous && (
                    <Link
                        href={`/pokemon?offset=${prevOffset}`}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 font-medium transition-colors"
                    >
                        ← Anterior
                    </Link>
                )}

                {/* Botón Siguiente: Solo se muestra si la API dice que hay 'next' */}
                {data.next && (
                    <Link
                        href={`/pokemon?offset=${nextOffset}`}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 font-medium transition-transform transform hover:scale-105"
                    >
                        Siguiente →
                    </Link>
                )}
            </div>
        </>
    )
}


