// LICENSE: GNU GPL v3 You should have received a copy of the GNU General
// Public License along with this program. If not, see
// https://www.gnu.org/licenses/.

///////////////// derivation-hardegree.js //////////////////////////////
// Kalish-Montague style derivations using Hardegree's rule set       //
////////////////////////////////////////////////////////////////////////

import LogicPenguinProblem from '../problem-class.js';
import DerivationExercise from './derivation-base.js';
import { addelem, htmlEscape } from '../common.js';

// TODO: perhaps rebase on derivation-km-base.js and allow any ruleset?
import getRules from '../checkers/rules/hurley-rules.js';
import notations from '../symbolic/notations.js';

export default class DerivationHardegree extends DerivationExercise {

  constructor() {
    super();
  }

  addSubDerivHook(subderiv) {
    const l = subderiv.addLine(subderiv.target, true);
    if (!this.isRestoring && !this.settingUp) {
      l.input.focus();
    }
  }

  getAnswer() {
    return super.getAnswer();
  }

  getSolution() {
    return super.getSolution();
  }

  // in justifications, certain letters auto-uppercase
  justKeydownExtra(e, elem) {
    if (e.ctrlKey || e.altKey) { return; }
    /* hurley system doesn't need this
    if (((e.key == 'e') || (e.key == 'E')) && (this.options.pred)) {
      const pos = elem.selectionStart;
      let bef = '';
      if (pos > 0) {
        bef = elem.value.at(pos-1);
      }
      if (bef != 'R') {
        e.preventDefault();
        elem.insertHere(this.symbols.EXISTS);
      }
    }
    if ((e.key == 'a') && (this.options.pred) &&
        (this.notation.quantifierForm.search('Q\\?') == -1) &&
        elem.selectionStart === 0) {
      e.preventDefault();
      elem.insertHere(this.symbols.FORALL);
    }
    if (/^[oiucdn]$/.test(e.key)) {
      e.preventDefault();
      elem.insertHere(e.key.toUpperCase());
    }
    if (e.key == 'p') {
      const pos = elem.selectionStart;
      let bef = '';
      if (pos > 1) {
        bef = elem.value.at(pos-2) + elem.value.at(pos-1);
      }
      if (bef != 'Re') {
        e.preventDefault();
        elem.insertHere('P');
      }
    }
    if (e.key == 'a' && !this?.options?.pred && elem.selectionStart == 0) {
      e.preventDefault();
      elem.insertHere('A');
    }
    if (/^[S]$/.test(e.key)) {
      if (!("forallSwap" in e)  || (!e.forallSwap)) {
        e.preventDefault();
        elem.insertHere(e.key.toLowerCase());
      }
    }
    */
  }

  makeProblem(problem, options, checksave) {
    const notationname = options?.notation ?? 'hardegree';
    this.rules = getRules(notationname);
    this.ruleset = this.rules;
    this.schematicLetters = notations[notationname].schematicLetters;
    this.schematic = ((s) => (DerivationHardegree.schematic(s, this.schematicLetters)));
    this.useShowLines = true;
    // different icon for adding subderivation
    this.icons.addsubderiv = 'variable_add';
    super.makeProblem(problem, options, checksave);
  }


  static schematic(s, letters) {
    const lta = [...letters];
    const scA = lta[0];
    let scB = 'ℬ';
    let scC = '𝒞';
    if (scA == 'p') {
      scB = 'q';
      scC = 'r';
    }
    if (scA == '𝑨') {
      scB = '𝑩';
      scC = '𝑪';
    }
    if (scA == 'φ') {
      scB = 'ψ';
      scC = 'χ';
    }
    const scx = lta[2];
    const sca = lta[3];
    const scn = lta[4];
    let scb = '𝒷';
    if (sca == '𝒄') {
      scb = '𝒅';
    }
    if (sca=='𝒸') {
      scb = '𝒹';
    }
    if (/[ab] [=≠] [ba]/.test(s)) {
      return s.replace(/a/g, sca)
        .replace(/b/g, scb);
    }
    if (s == 'a') {
      return sca;
    }
    if (s == 'b') {
      return scb;
    }
    return s.replace(/Ax/g, scA + scx)
      .replace(/A/g, scA)
      .replace(/B/g, scB)
      .replace(/C/g, scC)
      .replace(/x/g, scx)
      .replace(/a/g,' [' + sca + '/' + scx + ']')
      .replace(/b/g,' [' + scb + '/' + scx + ']')
      .replace(/d/g,' [' + scb + '/' + scx + ']')
      .replace(/n/g,' [' + scn + '/' + scx + ']');
  }

  static sampleProblemOpts(opts) {
    let [parentid, problem, answer, restore, options] =
      LogicPenguinProblem.sampleProblemOpts(opts);

    // if no problem, try to reconstruct from answer
    if ((problem === null) && answer) {
      problem = { prems: [], conc: '' };
      // go through parts of main derivation in answer
      for (const pt of answer?.parts) {
        // put premises in problem.prems
        if (("j" in pt) && (pt.j == 'Pr') && ("s" in pt)) {
          problem.prems.push(pt.s);
        }
        if (("parts" in pt) && ("showline" in pt) &&
            ("s" in pt.showline)) {
          problem.conc = pt.showline.s;
          break;
        }
      }
    }

    // use hardegree notation if not set
    if (!("notation" in options)) {
      options.notation = 'hardegree';
    }

    // partial problems treated differently
    const partial = (!!answer?.partial);
    if ((!("checklines" in options)) || (options.checklines === null)) {
      options.checklines = true;
    }
    // if lowercase letter in conclusion, then it's predicate logic
    if (((!("pred" in options)) || (options.pred === null)) &&
        (/[a-z]/.test( problem.conc ))) {
      options.pred = true;
    } else {
      options.lazy = true;
    }
    // if partial, restore what was given as "answer"
    if (partial && (restore === null) && answer) {
      restore = answer;
    }
    return [parentid, problem, answer, restore, options];
  }

}

customElements.define("derivation-hardegree", DerivationHardegree);
