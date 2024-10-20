import type { FavoritePokemon } from "@/interfaces/favorites-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favoritePokemons: FavoritePokemon[] = JSON.parse(
      localStorage.getItem("favorites") ?? "[]",
    );

    const newFavorites = favoritePokemons.filter(p => p.id !== pokemon.id);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class='my-8 flex flex-col items-center justify-center gap-2'>
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={`Pokemon número ${pokemon.id} nombre ${pokemon.name}`}
            width='96'
            height='96'
            style={`view-transition-name: ${pokemon.name}-image`}
          />
          <p class='capitalize'>
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button onClick={deleteFavorite} class='text-red-400'>
          Borrar
        </button>
      </div>
    </Show>
  );
};
