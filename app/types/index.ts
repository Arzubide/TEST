export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonResult {
    count: number;
    next: string;
    previous: string;
    result: Pokemon[];
}
