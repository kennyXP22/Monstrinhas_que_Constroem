import { useState } from 'react';
import { CHARACTERS } from '../data/characters';
import { PHASES } from '../data/phases';
import { Guide } from './Guide';
import { Loading } from './Loading';
import { Stage } from './Stage';
import { ProgressBar } from './ProgressBar';

interface PhaseProps { phase: number }

export function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <>
      <h1>Monstrinhas que Constroem</h1>
      <p>Percorra 6 fases, escolha o que fazer em situações do dia a dia e construa seu monstrinho com massinha de EVA.</p>
      <section className="card">
        {Object.values(CHARACTERS).map((c) => (
          <div className="guide" key={c.name}>
            <img className="avatar" src={c.image} alt={c.name} />
            <div><strong>{c.name}</strong><p className="muted">{c.tagline}</p></div>
          </div>
        ))}
      </section>
      <button className="primary" onClick={onStart}>Começar missão</button>
    </>
  );
}

export function IntroScreen({ phase, onBegin }: PhaseProps & { onBegin: () => void }) {
  const p = PHASES[phase];
  return (
    <>
      <ProgressBar current={phase} />
      <Stage phase={phase}>
        <section className="card">
          <Guide guide={p.guide} text={p.guideLine} />
          <h2>Fase {p.id}: {p.name}</h2>
          <h3>{p.skill}</h3>
          <p>{p.description}</p>
        </section>
        <button className="primary" onClick={onBegin}>Vamos lá</button>
      </Stage>
    </>
  );
}

export function MissionScreen({ phase, mission, onChoose }: PhaseProps & { mission: number; onChoose: (i: number) => void }) {
  const p = PHASES[phase];
  const m = p.missions[mission];
  return (
    <>
      <ProgressBar current={phase} />
      <Stage phase={phase}>
        <section className="card">
          <Guide guide={p.guide} text={`Missão ${m.id} — ${m.title}`} />
          <p>{m.situation}</p>
          <h3>{m.question}</h3>
          {m.options.map((o, i) => (
            <button key={i} className="option" onClick={() => onChoose(i)}>{'ABCD'[i]}. {o}</button>
          ))}
        </section>
      </Stage>
    </>
  );
}

export function ReflectScreen({ phase, mission, choice, onNext }: PhaseProps & { mission: number; choice: number; onNext: () => void }) {
  const p = PHASES[phase];
  const m = p.missions[mission];
  return (
    <>
      <ProgressBar current={phase} />
      <Stage phase={phase}>
        <section className="card">
          <Guide guide={p.guide} text="Vamos pensar nessa escolha..." />
          <p><strong>Você escolheu:</strong> {m.options[choice]}</p>
          <div className="talk"><strong>Para conversar:</strong> {m.conversation}</div>
        </section>
        <button className="primary" onClick={onNext}>Continuar</button>
      </Stage>
    </>
  );
}

export function BuildScreen({ phase, onContinue }: PhaseProps & { onContinue: () => void }) {
  const p = PHASES[phase];
  return (
    <>
      <ProgressBar current={phase} />
      <section className="card center">
        <h2>CONSTRUINDO...</h2>
        <Loading />
        <p>Hora de pausar e construir <strong>{p.name.toLowerCase()}</strong> do monstrinho com massinha de EVA.</p>
      </section>
      <button className="primary" onClick={onContinue}>CONTINUAR MISSÃO</button>
    </>
  );
}

export function EndScreen({ onRestart }: { onRestart: () => void }) {
  const [skill, setSkill] = useState('');
  const [situation, setSituation] = useState('');
  return (
    <>
      <h1>Seu monstrinho ficou pronto! 🎉</h1>
      <div className="podium">
        {Object.values(CHARACTERS).map((c) => <img key={c.name} src={c.full} alt={c.name} />)}
      </div>
      <section className="card">
        <p>Você usou as seis habilidades:</p>
        <div className="chips">
          {PHASES.map((p) => <span key={p.id} style={{ background: CHARACTERS[p.guide].color }}>{p.skill}</span>)}
        </div>
      </section>
      <section className="card">
        <h3>Meu diário</h3>
        <label htmlFor="skill">Uma habilidade que percebi em mim:</label>
        <textarea id="skill" rows={2} value={skill} onChange={(e) => setSkill(e.target.value)} />
        <label htmlFor="situation">Uma situação em que vou experimentá-la esta semana:</label>
        <textarea id="situation" rows={2} value={situation} onChange={(e) => setSituation(e.target.value)} />
      </section>
      <button className="primary" onClick={onRestart}>Jogar de novo</button>
    </>
  );
}
