interface NamedAPIResource {
    name: string;
    url: string;
  }
  
  interface Move {
    name: string;
    url: string;
  }
  
  interface Ability {
    name: string;
    url: string;
  }
  
  interface GameIndex {
    game_index: number;
    version: NamedAPIResource;
  }
  
  interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
  }
  
  interface Type {
    slot: number;
    type: NamedAPIResource;
  }
  
  interface Sprite {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      [key: string]: {
        [key: string]: string | null;
      };
    };
    versions: {
      [key: string]: {
        [key: string]: {
          [key: string]: string | null;
        };
      };
    };
  }
  
  export interface PokemonDetail {
    abilities: Ability[];
    base_experience: number;
    forms: NamedAPIResource[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
      move: Move;
      version_group_details: VersionGroupDetail[]
    }[];
    name: string;
    order: number;
    species: NamedAPIResource;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
  }

  export interface PokemonList {
    name: string;
    url: string;
}
  