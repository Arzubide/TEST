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

export type PokemonResult = z.infer<typeof PokemonResultSchema>;
