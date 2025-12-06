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
            <div className=" pt-7 pb-10 flex justify-center">
                <Link
                    href="/pokemon"
                    className="rounded-2xl bg-blue-600 hover:bg-blue-700"
                >
                    Return to list
                </Link>
            </div>
            <PokemonDetailCard pokemon={pokemon}/>

        </>
    );
}