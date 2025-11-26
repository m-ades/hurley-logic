import { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { WORKSHEETS } from './proofs.js'
import theme from './theme.js'
import Layout from './components/layout.jsx'
import WorksheetTabs from './components/worksheettabs.jsx'
import { useScoring } from './hooks/usescoring.js'
import { useProofState } from './hooks/useproofstate.js'
import { exportWorksheetPDF } from './utils/exportPDF.js'

export default function App() {
  const [currentWorksheetIndex, setCurrentWorksheetIndex] = useState(0)
  const [currentProofIndex, setCurrentProofIndex] = useState(0)
  
  const currentWorksheet = WORKSHEETS[currentWorksheetIndex]
  const currentProof = currentWorksheet?.proofs[currentProofIndex]
  
  const { completedProofs, score, scoreStyle, handleProofComplete } = useScoring(
    currentWorksheet
  )
  const { getSavedProofState, handleProofStateChange } = useProofState()

  const handleWorksheetChange = (newIndex) => {
    setCurrentWorksheetIndex(newIndex)
    setCurrentProofIndex(0)
  }

  const handleExport = async () => {
    if (!currentWorksheet) return
    
    try {
      const allStates = currentWorksheet.proofs.map(proof => ({
        id: proof.id,
        questionId: proof.questionId,
        premises: proof.premises,
        conclusion: proof.conclusion,
        savedState: getSavedProofState(proof.id)
      }))
      
      const exportData = {
        worksheet: currentWorksheet.title,
        worksheetId: currentWorksheet.id,
        exportedAt: new Date().toISOString(),
        proofs: allStates
      }
      
      await exportWorksheetPDF(exportData)
    } catch (error) {
      console.error('Export failed:', error)
      const errorMessage = error?.message || error?.toString() || 'Unknown error'
      alert(`Export failed: ${errorMessage}`)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout
        title="Natural Deduction Proofs (Predicate Logic)"
        score={score}
        total={currentWorksheet?.proofs.length || 0}
        scoreStyle={scoreStyle}
        currentProofId={currentProof?.id}
        completedProofs={completedProofs}
        worksheets={WORKSHEETS}
        currentWorksheetIndex={currentWorksheetIndex}
        onWorksheetIndexChange={handleWorksheetChange}
        onExportClick={handleExport}
      >
        <WorksheetTabs
          worksheets={WORKSHEETS}
          currentWorksheetIndex={currentWorksheetIndex}
          onWorksheetIndexChange={handleWorksheetChange}
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
          html, body {
            overflow: hidden;
            height: 100%;
          }
          #root {
            height: 100%;
            overflow: hidden;
          }
        `}
      </style>
    </ThemeProvider>
  )
}
