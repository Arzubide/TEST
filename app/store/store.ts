import {create} from "zustand"
import {persist} from "zustand/middleware/persist";
import {PokemonDetail} from "@/app/schemas/pokemonSchemas";

interface PokemonState {
    favorites: PokemonDetail[]
    handleClickFavorite : (pokemon: PokemonDetail) => void
}

export const usePokemonState = create<PokemonState>()(
    persist(
        (set, get) => ({
            favorites : [],

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