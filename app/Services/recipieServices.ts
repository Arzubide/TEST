import {PokemonResult} from "@/app/types";

export async function getPokemons(): Promise<PokemonResult> {
    const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20",
        {cache: "no-store"}
    )
        if(!res.ok) {
            throw new Error('Error occured');
        }

        return res.json();
}

