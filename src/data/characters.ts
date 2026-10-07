import alex from '../assets/characters/alex.png';
import violet from '../assets/characters/violet.png';
import solariun from '../assets/characters/solariun.png';
import alexFull from '../assets/backgound/alex.png';
import violetFull from '../assets/backgound/violet.png';
import solariunFull from '../assets/backgound/solariun.png';
import type { Character, GuideId } from '../types';

export const CHARACTERS: Record<GuideId, Character> = {
  alex: { name: 'Alex', tagline: 'Feiticeira que sempre tem um plano novo.', image: alex, full: alexFull, color: '#b3263a' },
  violet: { name: 'Violet', tagline: 'Sereia curiosa que adora observar o mundo humano.', image: violet, full: violetFull, color: '#6d5bd0' },
  solariun: { name: 'Solariun', tagline: 'Fada que ama construir e espalhar magia.', image: solariun, full: solariunFull, color: '#d9a40f' },
};
