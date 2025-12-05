export interface Pokemon {
    nombre: string;
    url: string;
}

export interface PokemonResult {
    count: number;
    next: string;
    previous: string;
    result: Pokemon[];
}

//commit
// export interface PokemonDetails {
//     id: number;
//     nombre: string;
//     peso: number;
//     sprites : {
//         front: string;
//     };
//     types : {
//         slot: number;
//         type: Pokemon;
//     }[];
// }