import { useReducer } from 'react';
import { PHASES } from '../data/phases';

export type Step =
  | { kind: 'start' }
  | { kind: 'intro'; phase: number }
  | { kind: 'mission'; phase: number; mission: number }
  | { kind: 'reflect'; phase: number; mission: number; choice: number }
  | { kind: 'build'; phase: number }
  | { kind: 'end' };

type Action =
  | { type: 'START' } | { type: 'BEGIN_PHASE' } | { type: 'CHOOSE'; choice: number }
  | { type: 'NEXT' } | { type: 'FINISH_BUILD' } | { type: 'RESTART' };

const LAST_PHASE = PHASES.length - 1;

function reducer(step: Step, action: Action): Step {
  switch (action.type) {
    case 'START':
      return { kind: 'intro', phase: 0 };
    case 'BEGIN_PHASE':
      return step.kind === 'intro' ? { kind: 'mission', phase: step.phase, mission: 0 } : step;
    case 'CHOOSE':
      return step.kind === 'mission' ? { ...step, kind: 'reflect', choice: action.choice } : step;
    case 'NEXT': {
      if (step.kind !== 'reflect') return step;
      const isLast = step.mission >= PHASES[step.phase].missions.length - 1;
      return isLast
        ? { kind: 'build', phase: step.phase }
        : { kind: 'mission', phase: step.phase, mission: step.mission + 1 };
    }
    case 'FINISH_BUILD':
      if (step.kind !== 'build') return step;
      return step.phase < LAST_PHASE ? { kind: 'intro', phase: step.phase + 1 } : { kind: 'end' };
    case 'RESTART':
      return { kind: 'start' };
  }
}

export function useGame() {
  const [step, dispatch] = useReducer(reducer, { kind: 'start' } as Step);
  return { step, dispatch };
}
