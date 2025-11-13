export const PROOFS = [
  {
    id: 1,
    premises: ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'],
    conclusion: '(∀x)(Dx ≡ Mx)',
  },
  {
    id: 2,
    premises: ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'],
    conclusion: '(∀x)[(Ax • Bx) ⊃ Dx]',
  },
  {
    id: 3,
    premises: ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'],
    conclusion: '(∃x)Bx',
  },
  {
    id: 4,
    premises: ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'],
    conclusion: '(∀x)[(Ax • Bx) ⊃ Dx]',
  },
  {
    id: 5,
    premises: ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'],
    conclusion: '(∃z)~Jz',
  },
  {
    id: 6,
    premises: ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'],
    conclusion: '(∃x)(Ax)• (∃x)(Cx)',
  },
  {
    id: 7,
    premises: ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'],
    conclusion: 'Cj',
  },
  {
    id: 8,
    premises: ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'],
    conclusion: 'Mc',
  },
  {
    id: 9,
    premises: ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'],
    conclusion: '(∃x)Sx',
  },
  {
    id: 10,
    premises: ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'],
    conclusion: '(∃x)~Px',
  },
  {
    id: 11,
    premises: ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'],
    conclusion: '(∀x) (Hx ⊃ ~Gx)',
  },
]

