import { CHARACTERS } from '../data/characters';
import type { GuideId } from '../types';

interface Props { guide: GuideId; text: string }

export function Guide({ guide, text }: Props) {
  const c = CHARACTERS[guide];
  return (
    <div className="guide">
      <img className="avatar" src={c.image} alt={c.name} />
      <div>
        <strong>{c.name}</strong>
        <p className="muted">{text}</p>
      </div>
    </div>
  );
}
