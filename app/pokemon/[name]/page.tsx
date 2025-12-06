"use client";

import {useEffect, useState, use} from "react";
import {PokemonDetail} from "@/app/schemas/pokemonSchemas";
import {getPokemonDetails} from "@/app/Services/recipieServices";
import PokemonDetailCard from "@/app/components/PokemonDetailCard";
import Header from "@/app/components/Header";
import Link from "next/link";

interface Props {
    params: Promise<{ name: string }>;
}

export default function PokemonDetailPage({ params }: Props) {

    const resolvedParams = use(params);
    const { name } = resolvedParams;

    const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await getPokemonDetails(name);
                setPokemon(data);
            } catch (e) {
                const message = e instanceof Error ? e.message : "Error desconocido";
                setError(message);
            } finally {
                setLoading(false);
            }
        };
        if (name) {
            loadData();
        }
    }, [name]);

    if (loading) return <div className="p-10 text-center">Cargando detalles...</div>;
    if (error) return <div className="p-10 text-center text-red-500">Error: {error}</div>;
    if (!pokemon) return null;

    return (
        <>
            <Header/>
            <div className="flex flex-col items-center pt-7 pb-10 px-4">
                <PokemonDetailCard pokemon={pokemon}/>
                <Link
                    href="/pokemon"
                    className="
                        mt-8
                        bg-blue-50 text-blue-600 font-semibold
                        px-6 py-2 rounded-lg
                        border border-blue-100
                        hover:bg-blue-600 hover:text-white
                        transition-colors duration-200
                        text-center

                    "
                >
                    Return to list
                </Link>
            </div>

        </>
    );
}