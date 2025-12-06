import {create} from "zustand"
import {persist} from "zustand/middleware";
import {PokemonDetail} from "@/app/schemas/pokemonSchemas";

interface PokemonState {
    favorites: PokemonDetail[]
    handleClickFavorite : (pokemon: PokemonDetail) => void
}

export const usePokemonState = create<PokemonState>()(
    persist(
        (set, get) => ({
            favorites : [],

            //Function AddtoFavorites and RemoveFavorites
            handleClickFavorite : (pokemon) => {
                if (get().favorites.some(p => p.name === pokemon.name)) {
                    set({
                        favorites: get().favorites.filter(p => p.name !== pokemon.name),
                    })
                } else {
                    set({
                        favorites : [...get().favorites, pokemon],
                    })
                }

            }
        }),
        {
            name: 'pokemon-favorites',
        }
    )
)