import { useEffect, useRef, useState } from 'react'
import LogicPenguinProof from './logicpenguinproof.jsx'

export default function ProofEditor({ proof, onProofComplete, savedState, onStateChange }) {
  const completionRef = useRef(false)
  const [isComplete, setIsComplete] = useState(false)
  const proofRef = useRef(null)

  useEffect(() => {
    if (!proof || !onProofComplete) return
    
    // Get the specific derivation element for this component instance
    // Wait a bit for it to be created
    const getDerivElement = () => {
      if (proofRef.current) {
        return proofRef.current.querySelector('derivation-hardegree')
      }
      return null
    }
    
    // Listen for proof completion from LogicPenguin
    // LogicPenguin sets classes on the derivation element when correct
    const checkCompletion = () => {
      const derivElement = getDerivElement()
      if (!derivElement) return
      
      // get actual indicator status
      const indicator = derivElement.getIndicatorStatus?.()
      const hasCorrectClass = derivElement.classList.contains('correct')
      
      // debug logging--remove in production
      if (hasCorrectClass || indicator?.successstatus === 'correct') {
        console.log('Proof completion check:', {
          hasCorrectClass,
          successstatus: indicator?.successstatus,
          allClasses: Array.from(derivElement.classList),
          indicator
        })
      }
      
      if (hasCorrectClass) {
        if (!completionRef.current) {
          console.log('Marking proof as complete!', proof.id, {
            hasCorrectClass, // LogicPenguin sets correct class when the proof is fully correct after clicking "check answer"
            successstatus: indicator?.successstatus,
            allClasses: Array.from(derivElement.classList),
            indicator
          })
          completionRef.current = true
          setIsComplete(true)
          onProofComplete(proof.id)
        }
      } else { // if proof was marked complete but no longer has correct class, reset
        if (completionRef.current) {
          console.log('Proof lost correct status, resetting completion', proof.id)
          completionRef.current = false
          setIsComplete(false)
        }
      }
    }

    // check immediately AND periodically for completion
    const immediateCheck = setTimeout(() => {
      checkCompletion()
    }, 100)
    
    const interval = setInterval(checkCompletion, 500)
    
    // Also listen for indicator changes
    const setupObserver = () => {
      const derivElement = getDerivElement()
      if (derivElement) {
        const observer = new MutationObserver(checkCompletion)
        observer.observe(derivElement, {
          attributes: true,
          attributeFilter: ['class'],
          subtree: true
        })
        return observer
      }
      return null
    }
    let observer = setupObserver()
    const observerTimeout = setTimeout(() => {
      if (!observer) {
        observer = setupObserver()
      }
      checkCompletion()
    }, 200)
    
    return () => {
      clearTimeout(immediateCheck)
      clearInterval(interval)
      clearTimeout(observerTimeout)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [proof, onProofComplete])

  if (!proof) return null

  return (
    <div ref={proofRef}>
      <LogicPenguinProof 
        premises={proof.premises} 
        conclusion={proof.conclusion}
        notation="hardegree"
        savedState={savedState}
        onStateChange={onStateChange}
      />
    </div>
  )
}
