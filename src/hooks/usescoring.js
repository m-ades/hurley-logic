import { useEffect, useMemo, useState } from 'react'

export function useScoring(totalProofs) {
  const [completedProofs, setCompletedProofs] = useState(new Set())
  const [pop, setPop] = useState(false)

  const score = useMemo(() => {
    return completedProofs.size
  }, [completedProofs])

  useEffect(() => {
    if (completedProofs.size > 0) {
      setPop(true)
      const t = setTimeout(() => setPop(false), 250)
      return () => {
        clearTimeout(t)
      }
    }
  }, [score, completedProofs])

  const scoreStyle = {
    display: 'inline-block',
    transition: 'transform 0.25s ease, filter 0.25s ease',
    transform: pop ? 'scale(1.35)' : 'scale(1)',
    filter: pop ? 'drop-shadow(0 0 6px #beafc2)' : 'none',
  }

  const handleProofComplete = (proofId) => {
    setCompletedProofs((prev) => new Set([...prev, proofId]))
    setPop(true)
    setTimeout(() => setPop(false), 250)
  }

  return {
    completedProofs,
    score,
    scoreStyle,
    handleProofComplete
  }
}

