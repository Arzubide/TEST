import {PokemonResultSchema, type PokemonResult} from "@/app/schemas/pokemonSchemas";

export async function getPokemons(): Promise<PokemonResult> {
    const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20",
        {cache: "no-store"}
    )
        if(!res.ok) {
            throw new Error('Error al hacer la peticion');
        }

        const data = await res.json();
        const validateData = PokemonResultSchema.parse(data);

        return validateData;
}

