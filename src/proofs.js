
const createProof = (worksheetId, questionId, premises, conclusion, description) => ({
  id: `${worksheetId}-${questionId}`, // Unique ID across worksheets
  questionId, // Keep original question number for display
  premises,
  conclusion,
  description,
})

const WORKSHEET_1 = [
  createProof(14, 'A', ['(x)(Ax ⊃ Bx)', '~Bm'], '(∃x)~Ax'),
  createProof(14, 'B', ['(x)(Ax ⊃ Bx)', '(x)(Cx ⊃ Dx)', 'Ae ∨ Ce'], '(∃x)(Bx ∨ Dx)'),
  createProof(14, 'C', ['(∃x)Ax ⊃ (x)(Bx ⊃ Cx)', 'Am • Bm'], 'Cm'),
  createProof(14, 'D', ['(∃x)Ax ⊃ (x)Bx', '(∃x)Cx ⊃ (∃x)Dx', 'An • Cn'], '(∃x)(Bx • Dx)'),
  createProof(14, 'E', ['(x)(Ax • Bx)', 'Cr ∨ ~(x)Bx'], '(∃x)(Cx • Ax)'),
  createProof(14, 'F', ['(x)[Ax ⊃ (Bx ≡ Cx)]', 'An • Am', 'Cn • ~Cm'], 'Bn • ~Bm'),
]

const WORKSHEET_2 = [
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

const WORKSHEET_3 = [
  createProof(16, 'J', ['~(∃x)(Px•~Qx)', '~(∀x)(~Rx ∨ Qx)'], '(∃x)~Px'),
  createProof(16, 'K', ['(∃x)(Hx•Gx) ⊃ (∀x) Ax', '~Am'], '(∀x)(Hx ⊃ ~Gx)'),
  createProof(16, 1, ['(x)(Ax ⊃ Bx)', '(x)(Ax ⊃ Cx)'], '(x)[Ax ⊃ (Bx • Cx)]'),
  createProof(16, 2, ['(∃x)Ax ⊃ (∃x)(Bx • Cx)', '(∃x)(Cx ∨ Dx) ⊃ (x)Ex'], '(x)(Ax ⊃ Ex)'),
  createProof(16, 3, ['(∃x)Ax ⊃ (∃x)(Bx • Cx)', '~(∃x)Cx'], '(x)~Ax'),
  createProof(16, 4, ['(x)(Ax ⊃ Cx)', '(∃x)Cx ⊃ (∃x)(Bx • Dx)'], '(∃x)Ax ⊃ (∃x)Bx'),
  createProof(16, 5, ['(x)(Ax ⊃ Bx)', 'Am ∨ An'], '(∃x)Bx'),
  createProof(16, 6, ['(∃x)Ax ⊃ (x)(Bx ⊃ Cx)', '(∃x)Dx ⊃ (∃x)Bx'], '(∃x)(Ax • Dx) ⊃ (∃x)Cx'),
  createProof(16, 7, ['(x)(Ax ⊃ Bx)', '~(∃x)Ax ⊃ (∃x)(Cx • Dx)', '(∃x)(Dx ∨ Ex) ⊃ (∃x)Bx'], '(∃x)Bx'),
  createProof(16, 8, ['(∃x)(Ax ∨ Ex) ⊃ (x)(Bx • ~Cx)', '(∃x)(Bx ∨ Fx) ⊃ (x)(Cx ∨ Dx)'], '(x)(Ax ⊃ Dx)'),
]

export const WORKSHEETS = [
  { id: 1, title: 'Worksheet 14', proofs: WORKSHEET_1 },
  { id: 2, title: 'Worksheet 15', proofs: WORKSHEET_2 },
  { id: 3, title: 'Worksheet 16', proofs: WORKSHEET_3 },
]

// Legacy export for backwards compatibility
export const PROOFS = WORKSHEET_1

