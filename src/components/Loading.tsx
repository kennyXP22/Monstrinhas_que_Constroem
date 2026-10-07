import { CHARACTERS } from '../data/characters';

/** Loading do "CONSTRUINDO...": as três personagens pulam em sequência. */
export function Loading() {
  return (
    <div className="loading" aria-hidden="true">
      <div className="loading-chars">
        {(['alex', 'violet', 'solariun'] as const).map((id, i) => (
          <img key={id} src={CHARACTERS[id].image} alt="" style={{ animationDelay: `${i * 0.25}s` }} />
        ))}
      </div>
      <div className="loading-bar" />
    </div>
  );
}
