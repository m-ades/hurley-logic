import { useEffect, useRef, useMemo } from "react";
import "../lib/logicpenguin/problemtypes/derivation-hardegree.js";

export default function LogicPenguinProof({
  premises,
  conclusion,
  notation = "hardegree",
  savedState,
  onStateChange,
}) {
  const ref = useRef(null);

  const problemKey = useMemo(
    () => `${premises.join(",")}|${conclusion}`,
    [premises, conclusion]
  );

  // loads problem when it changes
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const needsPred = /[∃∀]|[a-z]/.test([...premises, conclusion].join(" "));
    const problem = { prems: premises, conc: conclusion };

    const loadProblem = () => {
      if (typeof el.loadProblem !== "function") {
        console.error("[LogicPenguinProof] loadProblem() not available");
        return;
      }

      el.loadProblem(problem, { notation, pred: needsPred, identity: false });

      if (savedState && typeof el.setStateSnapshot === "function") {
        el.setStateSnapshot(savedState);
      }
    };

    if (el.isLPReady) {
      loadProblem();
      return;
    }

    const handleReady = () => loadProblem();
    el.addEventListener("LP-ready", handleReady);
    return () => el.removeEventListener("LP-ready", handleReady);
  }, [problemKey, notation, savedState, premises, conclusion]);


  return (
    <div className="logicpenguin" style={{ width: "100%", overflowX: "auto", minWidth: 0 }}>
      <derivation-hardegree
        ref={ref}
        style={{ display: "block", width: "100%", maxWidth: "100%" }}
      />
    </div>
  );
}

