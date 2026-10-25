'use client';

const stars = Array.from({ length: 68 }, (_, i) => ({ left: `${(i * 37 + 9) % 100}%`, top: `${(i * 61 + 4) % 100}%`, delay: `${(i % 11) * -.73}s`, duration: `${3 + (i % 7)}s`, size: `${1 + (i % 3)}px` }));

export function CosmicBackground() {
  return <>
    <div className="cosmic-backdrop" aria-hidden="true">
      <div className="cosmic-art" />
      <div className="moon-aura" />
      <div className="star-field">{stars.map((s, i) => <i key={i} style={{ left: s.left, top: s.top, animationDelay: s.delay, animationDuration: s.duration, width: s.size, height: s.size }} />)}</div>
      <div className="shooting-stars"><i /><i /><i /></div>
      <div className="cloud-banks cloud-bank-a" />
      <div className="cloud-banks cloud-bank-b" />
    </div>
    <div className="seer-stage" aria-hidden="true"><img src="/lumina-seer-extracted.png" alt="" /></div>
  </>;
}
