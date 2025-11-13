import { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { PROOFS } from './proofs.js'
import theme from './theme.js'
import Layout from './components/layout.jsx'
import ProofTabs from './components/prooftabs.jsx'
import { useScoring } from './hooks/usescoring.js'
import { useProofState } from './hooks/useproofstate.js'

export default function App() {
  const [currentProofIndex, setCurrentProofIndex] = useState(0)
  const { completedProofs, score, scoreStyle, handleProofComplete } = useScoring(PROOFS.length)
  const { getSavedProofState, handleProofStateChange } = useProofState()

  const currentProof = PROOFS[currentProofIndex]

  return (
    <ThemeProvider theme={theme}>
      <Layout
        title="Natural Deduction Proofs - Predicate Logic"
        score={score}
        total={PROOFS.length}
        scoreStyle={scoreStyle}
        currentProofId={currentProof?.id}
        completedProofs={completedProofs}
      >
        <ProofTabs
          currentProofIndex={currentProofIndex}
          onProofIndexChange={setCurrentProofIndex}
          completedProofs={completedProofs}
          onProofComplete={handleProofComplete}
          getSavedProofState={getSavedProofState}
          handleProofStateChange={handleProofStateChange}
        />
      </Layout>
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.7); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </ThemeProvider>
  )
}
