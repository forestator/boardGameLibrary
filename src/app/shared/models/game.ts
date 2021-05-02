export class Game {
  id: string;
  name: string;
  names: Array<string>;
  // min_players: number;
  minPlayers: number;
  // max_players: number;
  maxPlayers: number;
  // min_playtime: number;
  minPlaytime: number;
  // max_playtime: number;
  maxPlaytime: number;
  // min_age: number;
  minAge: number;
  description: string;
  // description_preview: string;
  descriptionPreview: string;
  // thumb_url: string;
  thumbUrl: string;
  // image_url: string;
  imageUrl: string;
  url: string;
  mechanics: Array<{ id: string }>;
  categories: Array<{ id: string }>;
}
