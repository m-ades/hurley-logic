
const createProof = (worksheetId, questionId, premises, conclusion, description) => ({
  id: `${worksheetId}-${questionId}`, // Unique ID across worksheets
  questionId, // Keep original question number for display
  premises,
  conclusion,
  description,
})

// Worksheet 1
const WORKSHEET_1 = [
  createProof(1, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], '(∀x)(Dx ≡ Mx)'),
  createProof(1, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(1, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(1, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(1, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(1, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(1, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(1, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(1, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(1, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(1, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheet 2 (placeholder - duplicate for now, you can replace with actual questions)
const WORKSHEET_2 = [
  createProof(2, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], 'Dx ≡ Mx'),
  createProof(2, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(2, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(2, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(2, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(2, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(2, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(2, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(2, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(2, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(2, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheet 3
const WORKSHEET_3 = [
  createProof(3, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], '(∀x)(Dx ≡ Mx)'),
  createProof(3, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(3, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(3, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(3, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(3, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(3, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(3, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(3, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(3, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(3, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheet 4
const WORKSHEET_4 = [
  createProof(4, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], '(∀x)(Dx ≡ Mx)'),
  createProof(4, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(4, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(4, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(4, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(4, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(4, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(4, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(4, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(4, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(4, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheet 5
const WORKSHEET_5 = [
  createProof(5, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], '(∀x)(Dx ≡ Mx)'),
  createProof(5, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(5, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(5, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(5, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(5, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(5, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(5, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(5, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(5, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(5, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheet 6
const WORKSHEET_6 = [
  createProof(6, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], '(∀x)(Dx ≡ Mx)'),
  createProof(6, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(6, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(6, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(6, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(6, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(6, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(6, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(6, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(6, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(6, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheet 7
const WORKSHEET_7 = [
  createProof(7, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], '(∀x)(Dx ≡ Mx)'),
  createProof(7, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(7, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(7, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(7, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(7, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(7, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(7, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(7, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(7, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(7, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheet 8
const WORKSHEET_8 = [
  createProof(8, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], '(∀x)(Dx ≡ Mx)'),
  createProof(8, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(8, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(8, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(8, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(8, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(8, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(8, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(8, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(8, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(8, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheet 9
const WORKSHEET_9 = [
  createProof(9, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], '(∀x)(Dx ≡ Mx)'),
  createProof(9, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(9, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(9, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(9, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(9, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(9, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(9, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(9, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(9, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(9, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheet 10
const WORKSHEET_10 = [
  createProof(10, 1, ['(∀x)(Dx ⊃ Mx)', '(∀x)(Mx ⊃ Dx)'], '(∀x)(Dx ≡ Mx)'),
  createProof(10, 2, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(10, 3, ['(∀x)[Ax ⊃ (Bx ∨ Cx)]', '(∃x)(Ax•~Cx)'], '(∃x)Bx'),
  createProof(10, 4, ['(∀x)[(Ax • Bx) ⊃ Cx]', '(∀x)(Cx ⊃ Dx)'], '(∀x)[(Ax • Bx) ⊃ Dx]'),
  createProof(10, 5, ['(∀x)[Jx ⊃ (Kx • Lx)]', '(∃y)~Ky'], '(∃z)~Jz'),
  createProof(10, 6, ['(∃x)[(Ax)• (Cx ⊃ Bx)]', 'Cb'], '(∃x)(Ax)• (∃x)(Cx)'),
  createProof(10, 7, ['[(∃x)(Ax)• (∃x)(Bx)] ⊃ Cj', '(∃x)(Ax•Dx)', '(∃x)(Bx•Ex)'], 'Cj'),
  createProof(10, 8, ['(∃x)(Kx) ⊃ (∀x)[Lx ⊃ Mx]', 'Kc • Lc'], 'Mc'),
  createProof(10, 9, ['(∀x)(Px⊃ Qx) ⊃ (∃x)(Sx)', '(∀x)(Px⊃ Sx) • (∀x)(Sx⊃ Qx)'], '(∃x)Sx'),
  createProof(10, 10, ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(10, 11, ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x) (Hx ⊃ ~Gx)'),
]

// Worksheets array
export const WORKSHEETS = [
  { id: 1, title: 'Worksheet 1', proofs: WORKSHEET_1 },
  { id: 2, title: 'Worksheet 2', proofs: WORKSHEET_2 },
  { id: 3, title: 'Worksheet 3', proofs: WORKSHEET_3 },
  { id: 4, title: 'Worksheet 4', proofs: WORKSHEET_4 },
  { id: 5, title: 'Worksheet 5', proofs: WORKSHEET_5 },
  { id: 6, title: 'Worksheet 6', proofs: WORKSHEET_6 },
  { id: 7, title: 'Worksheet 7', proofs: WORKSHEET_7 },
  { id: 8, title: 'Worksheet 8', proofs: WORKSHEET_8 },
  { id: 9, title: 'Worksheet 9', proofs: WORKSHEET_9 },
  { id: 10, title: 'Worksheet 10', proofs: WORKSHEET_10 },
]

// Legacy export for backwards compatibility
export const PROOFS = WORKSHEET_1

