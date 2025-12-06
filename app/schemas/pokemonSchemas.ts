import {z} from "zod"

export const PokemonSchema = z.object({
    name: z.string(),
    url: z.string().url(),
});

export const PokemonResultSchema = z.object({
    count: z.number(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(PokemonSchema),
});


const PokemonTypeSchema = z.object({
    slot : z.number(),
    type: z.object({
        name: z.string(),
        url: z.string().url(),
    }),
})

const PokemonSpriteSchema = z.object({
    front_default: z.string().nullable(),
})

export const PokemonDetailSchema = z.object({
    id: z.number(),
    name: z.string(),
    weight: z.number(),
    sprites: PokemonSpriteSchema,
    types: z.array(PokemonTypeSchema),
})

export type PokemonResult = z.infer<typeof PokemonResultSchema>;

export type PokemonDetail = z.infer<typeof PokemonDetailSchema>;