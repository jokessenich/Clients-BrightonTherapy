/**
 * Monogram — a tasteful initial-in-circle placeholder for staff photos.
 * Designed to look intentional rather than like a missing image.
 * Swap to real photos via the `photo` prop in staff data; this renders
 * only when no photo is provided.
 */

type Props = {
  name: string;
  /** 0-4, picks a subtle color rotation */
  tone?: number;
  className?: string;
};

// Subtle monochrome navy tones so the grid reads as a cohesive set,
// not a color-block grid. All within the brand palette.
const TONES = [
  { bg: '#1e4d8c', fg: '#f4ede2' }, // primary navy / warm cream
  { bg: '#2d5a9a', fg: '#f4ede2' }, // lighter navy
  { bg: '#1c1917', fg: '#d6cbbc' }, // dark / stone-deep
  { bg: '#17407a', fg: '#e8dfd3' }, // deeper navy / stone
  { bg: '#2d2926', fg: '#e4ecf7' }, // near-black / sky
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

export default function Monogram({ name, tone = 0, className = '' }: Props) {
  const { bg, fg } = TONES[tone % TONES.length];
  const initials = getInitials(name);

  return (
    <div
      className={`monogram ${className}`}
      style={{
        background: bg,
        color: fg,
        width: '100%',
        aspectRatio: '3 / 4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--serif)',
        fontWeight: 400,
        fontStyle: 'italic',
        letterSpacing: '-0.02em',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Subtle watermark pattern to break up the flat color */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />
      <span
        style={{
          fontSize: 'clamp(3rem, 9vw, 5.5rem)',
          opacity: 0.92,
          letterSpacing: '0.02em',
          lineHeight: 1,
        }}
      >
        {initials}
      </span>
    </div>
  );
}
