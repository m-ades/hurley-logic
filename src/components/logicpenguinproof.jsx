import React, { useEffect, useRef } from "react";
// import the actual LogicPenguin derivation engine
import "../lib/logicpenguin/problemtypes/derivation-hardegree.js";

export default function LogicPenguinProof({ premises, conclusion, notation = "hardegree", savedState, onStateChange }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    // Clear any existing content to prevent duplicates
    ref.current.innerHTML = '';
    
    // Check if predicate logic is needed (has quantifiers or lowercase variables)
    const allFormulas = [...premises, conclusion].join(' ')
    const needsPred = /[∃∀]|[a-z]/.test(allFormulas)
    
    // LogicPenguin uses a makeProblem method defined on <derivation-hardegree>
    const problem = { prems: premises, conc: conclusion };
    try {
      ref.current.makeProblem(problem, {
        notation,
        checklines: true,
        pred: needsPred,
        identity: false,
      }, 'check answer');
      
      // Set problem type so local checker can be used
      // This enables the "check answer" button to work without a backend
      ref.current.myproblemtype = 'derivation-hardegree';
      ref.current.myquestion = problem;
      
      // For practice mode: provide a minimal answer structure
      // The checker will validate syntax, rules, and correctness
      // without needing a known solution to compare against
      // A proof is correct if it derives the conclusion from premises with valid rules
      ref.current.myanswer = null; // null means "check if proof is valid, not if it matches a solution"
      
      // restore saved state and wait for derivation initialization
      if (savedState && ref.current.restoreState) {
        setTimeout(() => {
          if (ref.current && ref.current.restoreState) {
            ref.current.isRestoring = true;
            ref.current.restoreState(savedState);
            ref.current.isRestoring = false;
          }
        }, 100);
      }
      
      // Add checkLines method for line-by-line checking (used by autocheck and manual check)
      if (!ref.current.checkLines) {
        ref.current.checkLines = async function() {
          if (!this.options.checklines) { return; }
          const question = this.myquestion;
          const answer = this.myanswer;
          const givenans = this.getAnswer();
          const partialcredit = false;
          const points = -1;
          const options = this.options;
          
          // Import checker dynamically
          const checkerModule = await import('../lib/logicpenguin/checkers/derivation-hardegree.js');
          const hardegreeDerivCheck = checkerModule.default;
          
          // set to checking
          this.markLinesAsChecking();
          const ind = await hardegreeDerivCheck(
            question, answer, givenans, partialcredit, points, options
          );
          // after check, mark them all unchecked
          this.markAllUnchecked();
          ind.successstatus = 'edited';
          ind.savedstatus = 'unsaved';
          ind.fromautocheck = true;
          if (!this.isRestoring) {
            this.setIndicator(ind);
          }
          /* user should click check answer explicitly
          if (forceSave) {
            const lines = this.getElementsByClassName("derivationline");
            // remove empty line at end
            const lastline = lines[lines.length - 1];
            if ((lastline.input.value == '')
                && (lastline.jinput.value == '')) {
              lastline.parentNode.removeChild(lastline);
            }
            // check/save answer
            this.processAnswer();
          }
          */
        };
      }
      
      
    } catch (err) {
      console.error("Error initializing LogicPenguin proof:", err);
    }
  }, [premises, conclusion, notation, savedState, onStateChange]);

  return (
    <div className="logicpenguin" style={{ width: "100%", overflowX: "auto", minWidth: 0 }}>
      <derivation-hardegree ref={ref} style={{ display: "block", width: "max-content" }}></derivation-hardegree>
    </div>
  );
}

