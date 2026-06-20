/*
  Hand-built blueprint illustrations for hero sections.
  Pure SVG, tokenized via Tailwind stroke-/fill- utilities so they track
  light/dark automatically. Decorative only → aria-hidden, pointer-events-none.
*/

function Ticks({ x, y, count = 8, gap = 14, len = 6, vertical = false }) {
  return Array.from({ length: count }).map((_, i) => {
    const major = i % 5 === 0;
    return vertical ? (
      <line
        key={i}
        x1={x}
        x2={x + (major ? len + 4 : len)}
        y1={y + i * gap}
        y2={y + i * gap}
        className={major ? 'stroke-ink/25' : 'stroke-ink/12'}
        strokeWidth="1"
      />
    ) : (
      <line
        key={i}
        x1={x + i * gap}
        x2={x + i * gap}
        y1={y}
        y2={y + (major ? len + 4 : len)}
        className={major ? 'stroke-ink/25' : 'stroke-ink/12'}
        strokeWidth="1"
      />
    );
  });
}

function Crosshair({ cx, cy, r = 58 }) {
  return (
    <g className="fill-none">
      <circle cx={cx} cy={cy} r={r} className="stroke-ink/12" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={r * 0.62} className="stroke-ink/10" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={3} className="fill-signal stroke-none" />
      <line x1={cx - r - 16} x2={cx + r + 16} y1={cy} y2={cy} className="stroke-ink/12" strokeWidth="1" />
      <line x1={cx} x2={cx} y1={cy - r - 16} y2={cy + r + 16} className="stroke-ink/12" strokeWidth="1" />
    </g>
  );
}

const sceneClass = 'pointer-events-none absolute inset-0 h-full w-full select-none';

function HomeScene() {
  return (
    <svg className={sceneClass} viewBox="0 0 1200 620" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {/* top dimension line */}
      <line x1="40" x2="1160" y1="40" y2="40" className="stroke-ink/12" strokeWidth="1" strokeDasharray="2 6" />
      <Ticks x={40} y={40} count={42} gap={28} />
      <text x="44" y="28" className="fill-ink/30 font-mono" fontSize="11" letterSpacing="2">0</text>
      <text x="1090" y="28" className="fill-ink/30 font-mono" fontSize="11" letterSpacing="2">REV.2026</text>

      {/* right telemetry target */}
      <Crosshair cx={970} cy={300} r={150} />
      <circle cx={970} cy={300} r={210} className="stroke-ink/06" strokeWidth="1" fill="none" />

      {/* amber plotted signal across the field */}
      <path
        d="M40 470 L180 470 L240 470 L300 360 L360 470 L520 470 L580 300 L640 470 L1160 470"
        className="stroke-signal/70 fill-none bp-draw"
        strokeWidth="1.5"
      />
      <circle cx="580" cy="300" r="3.5" className="fill-signal stroke-none" />

      {/* scattered registration marks */}
      {[
        [150, 150],
        [1060, 540],
        [760, 110],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1={x - 7} x2={x + 7} y1={y} y2={y} className="stroke-ink/18" strokeWidth="1" />
          <line x1={x} x2={x} y1={y - 7} y2={y + 7} className="stroke-ink/18" strokeWidth="1" />
        </g>
      ))}

      {/* bottom-left contour arcs */}
      <g className="fill-none stroke-ink/08" strokeWidth="1">
        <path d="M-40 600 Q120 520 80 360" />
        <path d="M-40 640 Q180 540 130 340" />
      </g>
    </svg>
  );
}

function ServicesScene() {
  // Exploded isometric layers
  const layer = (cy, label, accent) => (
    <g>
      <path
        d={`M780 ${cy} L960 ${cy - 52} L1140 ${cy} L960 ${cy + 52} Z`}
        className={accent ? 'stroke-signal/70 fill-signal/05' : 'stroke-ink/15 fill-ink/02'}
        strokeWidth="1.25"
      />
      <text x="612" y={cy + 4} className="fill-ink/30 font-mono" fontSize="11" letterSpacing="2">{label}</text>
      <line x1="660" x2="772" y1={cy} y2={cy} className="stroke-ink/12" strokeWidth="1" strokeDasharray="2 5" />
    </g>
  );
  return (
    <svg className={sceneClass} viewBox="0 0 1200 620" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Ticks x={40} y={40} count={42} gap={28} />
      <line x1="40" x2="1160" y1="40" y2="40" className="stroke-ink/10" strokeWidth="1" strokeDasharray="2 6" />
      {/* vertical spine through layers */}
      <line x1="960" x2="960" y1="150" y2="470" className="stroke-ink/12 bp-draw" strokeWidth="1" strokeDasharray="3 5" />
      {layer(180, 'L1 · UI', false)}
      {layer(290, 'L2 · LOGIC', true)}
      {layer(400, 'L3 · DATA', false)}
      {layer(510, 'L4 · INFRA', false)}
      <circle cx="960" cy="510" r="3.5" className="fill-signal stroke-none" />
    </svg>
  );
}

function AboutScene() {
  const nodes = [
    [880, 180],
    [1040, 300],
    [820, 360],
    [1000, 470],
    [700, 260],
  ];
  return (
    <svg className={sceneClass} viewBox="0 0 1200 620" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Ticks x={40} y={40} count={42} gap={28} />
      <line x1="40" x2="1160" y1="40" y2="40" className="stroke-ink/10" strokeWidth="1" strokeDasharray="2 6" />
      {/* orbit */}
      <ellipse cx="900" cy="320" rx="240" ry="150" className="stroke-ink/08 fill-none" strokeWidth="1" />
      {/* connections */}
      <g className="stroke-ink/12 bp-draw" strokeWidth="1">
        <line x1={nodes[0][0]} y1={nodes[0][1]} x2={nodes[1][0]} y2={nodes[1][1]} />
        <line x1={nodes[0][0]} y1={nodes[0][1]} x2={nodes[2][0]} y2={nodes[2][1]} />
        <line x1={nodes[2][0]} y1={nodes[2][1]} x2={nodes[3][0]} y2={nodes[3][1]} />
        <line x1={nodes[1][0]} y1={nodes[1][1]} x2={nodes[3][0]} y2={nodes[3][1]} />
        <line x1={nodes[4][0]} y1={nodes[4][1]} x2={nodes[0][0]} y2={nodes[0][1]} />
        <line x1={nodes[4][0]} y1={nodes[4][1]} x2={nodes[2][0]} y2={nodes[2][1]} />
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <rect
            x={x - 6}
            y={y - 6}
            width="12"
            height="12"
            className={i === 1 ? 'stroke-signal fill-signal/15' : 'stroke-ink/30 fill-paper'}
            strokeWidth="1.25"
          />
        </g>
      ))}
    </svg>
  );
}

function ContactScene() {
  return (
    <svg className={sceneClass} viewBox="0 0 1200 620" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Ticks x={40} y={40} count={42} gap={28} />
      <line x1="40" x2="1160" y1="40" y2="40" className="stroke-ink/10" strokeWidth="1" strokeDasharray="2 6" />
      {/* curved meridians (map feel) */}
      <g className="stroke-ink/08 fill-none" strokeWidth="1">
        <path d="M620 60 Q900 320 620 580" />
        <path d="M760 60 Q1040 320 760 580" />
        <path d="M900 60 Q1180 320 900 580" />
        <path d="M620 180 Q900 180 1180 180" />
        <path d="M600 320 Q900 320 1200 320" />
        <path d="M620 460 Q900 460 1180 460" />
      </g>
      {/* location pin crosshair */}
      <g>
        <circle cx="905" cy="318" r="46" className="stroke-signal/60 fill-none bp-pulse" strokeWidth="1.25" />
        <line x1="845" x2="965" y1="318" y2="318" className="stroke-ink/20" strokeWidth="1" />
        <line x1="905" x2="905" y1="258" y2="378" className="stroke-ink/20" strokeWidth="1" />
        <circle cx="905" cy="318" r="5" className="fill-signal stroke-none" />
        <text x="922" y="300" className="fill-ink/35 font-mono" fontSize="11" letterSpacing="1">-4.05, 39.66</text>
      </g>
    </svg>
  );
}

function DocScene() {
  return (
    <svg className={sceneClass} viewBox="0 0 1200 320" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Ticks x={40} y={36} count={42} gap={28} />
      <line x1="40" x2="1160" y1="36" y2="36" className="stroke-ink/10" strokeWidth="1" strokeDasharray="2 6" />
      {/* drafting title block, lower right */}
      <g className="stroke-ink/12 fill-none" strokeWidth="1">
        <rect x="900" y="150" width="260" height="120" />
        <line x1="900" y1="190" x2="1160" y2="190" />
        <line x1="900" y1="230" x2="1160" y2="230" />
        <line x1="1030" y1="150" x2="1030" y2="270" />
      </g>
      <line x1="900" y1="150" x2="912" y2="150" className="stroke-signal" strokeWidth="2" />
      <line x1="900" y1="150" x2="900" y2="162" className="stroke-signal" strokeWidth="2" />
    </svg>
  );
}

const scenes = {
  home: HomeScene,
  services: ServicesScene,
  about: AboutScene,
  contact: ContactScene,
  doc: DocScene,
};

export function HeroBackdrop({ variant = 'home' }) {
  const Scene = scenes[variant] || HomeScene;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Scene />
    </div>
  );
}

/* Right-column figure for the home hero: an annotated system illustration. */
export function SystemSchematic() {
  const stages = [
    ['01', 'Map the pressure', 'workflow · users · deadline'],
    ['02', 'Shape the build', 'scope · plan · launch path'],
    ['03', 'Ship and support', 'deploy · hand over · maintain'],
  ];
  return (
    <figure className="registered relative">
      <div className="mb-6 flex items-center justify-between">
        <span className="spec text-ink">From problem to handover</span>
        <span className="spec spec-signal flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 bg-signal blink" aria-hidden="true" /> live
        </span>
      </div>

      <div className="relative pl-1">
        {/* amber signal spine */}
        <span className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-gradient-to-b from-signal/20 via-signal to-signal/20" aria-hidden="true" />
        <ol className="space-y-7">
          {stages.map(([n, title, meta]) => (
            <li key={n} className="relative flex gap-5">
              <span className="num relative z-[1] flex h-11 w-11 flex-none items-center justify-center border border-ink bg-paper text-sm font-semibold text-ink">
                {n}
                <span className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-signal" aria-hidden="true" />
              </span>
              <div className="min-w-0 pt-1">
                <p className="font-heading text-base font-bold tracking-tight text-ink">{title}</p>
                <p className="spec mt-1.5 text-[0.6rem] normal-case tracking-[0.12em]">{meta}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <figcaption className="mt-7 flex items-center justify-between border-t border-line pt-4">
        <span className="spec text-[0.6rem]">Scope locked before build</span>
        <span className="spec spec-signal">FIG.00</span>
      </figcaption>
    </figure>
  );
}
