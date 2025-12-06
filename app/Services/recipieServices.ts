import {PokemonResultSchema, type PokemonResult, PokemonDetailSchema, PokemonDetail} from "@/app/schemas/pokemonSchemas";

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


export async function getPokemonDetails(name : string): Promise<PokemonDetail> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if(!res.ok) {
        throw new Error('Error al hacer la peticion de los detalles del pokemon');
    }
    const data = await res.json();
    const validatePkemonDetails = PokemonDetailSchema.parse(data);
    return validatePkemonDetails;
}