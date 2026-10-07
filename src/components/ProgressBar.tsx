import { PHASES } from '../data/phases';

export function ProgressBar({ current }: { current: number }) {
  return (
    <div className="progress" role="progressbar" aria-valuemin={1} aria-valuemax={PHASES.length} aria-valuenow={current + 1}>
      {PHASES.map((p, i) => <i key={p.id} className={i <= current ? 'on' : ''} />)}
    </div>
  );
}
