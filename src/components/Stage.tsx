import type { ReactNode } from 'react';
import { CHARACTERS } from '../data/characters';
import { PHASES } from '../data/phases';

interface Props { phase: number; children: ReactNode }

/** Mostra a personagem da fase ao lado do conteúdo (alternando esquerda/direita). */
export function Stage({ phase, children }: Props) {
  const c = CHARACTERS[PHASES[phase].guide];
  return (
    <div className={`stage ${phase % 2 === 0 ? 'left' : 'right'}`}>
      <img className="full" src={c.full} alt={c.name} />
      <div className="content">{children}</div>
    </div>
  );
}
