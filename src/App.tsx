import type { CSSProperties } from 'react';
import { useGame } from './hooks/useGame';
import { CHARACTERS } from './data/characters';
import { PHASES } from './data/phases';
import { BuildScreen, EndScreen, IntroScreen, MissionScreen, ReflectScreen, StartScreen } from './components/screens';

export default function App() {
  const { step, dispatch } = useGame();
  const accent = step.kind === 'start' || step.kind === 'end'
    ? CHARACTERS.violet.color
    : CHARACTERS[PHASES[step.phase].guide].color;

  return (
    <main style={{ '--accent': accent } as CSSProperties}>
      {step.kind === 'start' && <StartScreen onStart={() => dispatch({ type: 'START' })} />}
      {step.kind === 'intro' && <IntroScreen phase={step.phase} onBegin={() => dispatch({ type: 'BEGIN_PHASE' })} />}
      {step.kind === 'mission' && <MissionScreen phase={step.phase} mission={step.mission} onChoose={(choice) => dispatch({ type: 'CHOOSE', choice })} />}
      {step.kind === 'reflect' && <ReflectScreen phase={step.phase} mission={step.mission} choice={step.choice} onNext={() => dispatch({ type: 'NEXT' })} />}
      {step.kind === 'build' && <BuildScreen phase={step.phase} onContinue={() => dispatch({ type: 'FINISH_BUILD' })} />}
      {step.kind === 'end' && <EndScreen onRestart={() => dispatch({ type: 'RESTART' })} />}
    </main>
  );
}
