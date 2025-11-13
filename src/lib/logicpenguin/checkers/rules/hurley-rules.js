import notations from '../../symbolic/notations.js';

const opnames = ['NOT','OR','AND','IFF','IFTHEN','FORALL','EXISTS','FALSUM'];

const hurleyRules = {
    // Logicpenguin system rules
    "Pr"  : { premiserule: true },
    "Ass" : { assumptionrule: true, hidden: true },
    
    // Rules of Inference
    "MP"  : { forms: [ { prems: ["A ⊃ B", "A"], conc: "B" } ] },
    "MT"  : { forms: [ { prems: ["A ⊃ B", "~B"], conc: "~A" } ] },
    "HS"  : { forms: [ { prems: ["A ⊃ B", "B ⊃ C"], conc: "A ⊃ C" } ] },
    "DS"  : { forms: [ { prems: ["A ∨ B", "~A"], conc: "B" } ] },
    "CD"  : { forms: [ { prems: ["(A ⊃ B) • (C ⊃ D)", "A ∨ C"], conc: "B ∨ D" } ] },
    "Simp" : { forms: [ { prems: ["A • B"], conc: "A" } ] },
    "Conj" : { forms: [ { prems: ["A", "B"], conc: "A • B" } ] },
    "Add" : { forms: [ { prems: ["A"], conc: "A ∨ B" }, { prems: ["A"], conc: "B ∨ A" } ] },
    

    // Rules of Replacement
    "DM" : { replacementrule: true, forms: [
        { a: "~(A • B)", b: "~A ∨ ~B" },
        { a: "~(A ∨ B)", b: "~A • ~B" }
    ]},
    "Com" : { replacementrule: true, forms: [
        { a: "A ∨ B", b: "B ∨ A" },
        { a: "A • B", b: "B • A" }
    ]},
    "Assoc" : { replacementrule: true, forms: [
        { a: "[A ∨ (B ∨ C)]", b: "[(A ∨ B) ∨ C]" },
        { a: "[A • (B • C)]", b: "[(A • B) • C]" }
    ]},
    "Dist" : { replacementrule: true, forms: [
        { a: "[A • (B ∨ C)]", b: "[(A • B) ∨ (A • C)]" },
        { a: "[A ∨ (B • C)]", b: "[(A ∨ B) • (A ∨ C)]" }
    ]},
    "DN" : { replacementrule: true, forms: [
        { a: "A", b: "~~A" },
        { a: "~~A", b: "A" }
    ]},
    "Trans" : { replacementrule: true, forms: [
        { a: "(A ⊃ B)", b: "(~B ⊃ ~A)" }
    ]},
    "Impl" : { replacementrule: true, forms: [
        { a: "(A ⊃ B)", b: "(~A ∨ B)" }
    ]},
    "Equiv" : { replacementrule: true, forms: [
        { a: "(A ≡ B)", b: "[(A ⊃ B) • (B ⊃ A)]" },
        { a: "(A ≡ B)", b: "[(A • B) ∨ (~A • ~B)]" }
    ]},
    "Exp" : { replacementrule: true, forms: [
        { a: "[(A • B) ⊃ C]", b: "[A ⊃ (B ⊃ C)]" }
    ]},
    "Taut" : { replacementrule: true, forms: [
        { a: "A", b: "(A ∨ A)" },
        { a: "A", b: "(A • A)" }
    ]},
    

    // Rules for Removing and Introducing Quantifiers

    "UI"  : { pred: true, forms: [ 
        { 
            prems: ["∀xAx"], 
            conc: "At" 
        }
    ]},
    "UG"  : { pred: true, forms: [ { prems: ["An"], conc: "∀xAx", subst: {"x":"n"} } ] },
    "EI"  : { pred: true, forms: [ { prems: ["∃xAx"], conc: "Aa", mustbenew: ["a"], subst: {"x":"a"} } ] },

    "EG"  : { pred: true, forms: [ 
        { prems: ["Aa"], conc: "∃xAx", subst: {"x":"a"} },  
        { prems: ["Ay"], conc: "∃xAx", subst: {"x":"y"} }
    ]},
    
    // Change of Quantifier Rules
    "CQ" : { pred: true, replacementrule: true, forms: [
        { a: "~∀xAx", b: "∃x~Ax" },
        { a: "~∃xAx", b: "∀x~Ax" },
        { a: "∀x~Ax", b: "~∃xAx" },
        { a: "∃x~Ax", b: "~∀xAx" }
    ]},
    "QN" : { pred: true, replacementrule: true, forms: [
        { a: "~∀xAx", b: "∃x~Ax" },
        { a: "~∃xAx", b: "∀x~Ax" },
        { a: "∀x~Ax", b: "~∃xAx" },
        { a: "∃x~Ax", b: "~∀xAx" }
    ]},
    
    // Identity Rules
    "=I"  : { pred: true, identity: true, forms: [ { prems: [], conc: 'a = a' } ]},
    "=O" : { pred: true, identity: true, forms: [ { prems: ["a = b", "A"], conc: "B", differsatmostby: ["B","A","b","a"] }, { prems: ["a = b", "A"], conc: "B", differsatmostby: ["B","A","a","b"] } ] },
}

export default function getHurleyRuleset(notationname) {
    return hurleyRules;
}

/*
function substituteSymbols(s, notationname) {
    const innotation = notations["hardegree"];
    const outnotation = notations[notationname];
    for (const op of opnames) {
        s = s.replaceAll(innotation[op], outnotation[op]);
    }
    return s;
}

export default function getHurleyRuleset(notationname) {
    // don't bother if we are just returning the name
    if (notationname == 'hardegree') { return hurleyRules; }
    // bind change function to new notation
    const change = ((s) => (substituteSymbols(s, notationname)));
    // start a new rule set and populate with changed rules
    const ruleset = {};
    for (const rulename in hurleyRules) {
        const newrulename = change(rulename);
        const rule = hurleyRules[rulename];
        if ("forms" in rule) {
            for (const form of rule.forms) {
                if ("conc" in form) {
                    form.conc = change(form.conc);
                }
                if ("prems" in form) {
                    for (let i=0; i<form.prems.length; i++) {
                        form.prems[i] = change(form.prems[i]);
                    }
                }
                if ("subderivs" in form) {
                    for (const subderiv of form.subderivs) {
                        if ("needs" in subderiv) {
                            for (let i=0; i<subderiv.needs.length; i++) {
                                subderiv.needs[i] = change(subderiv.needs[i]);
                            }
                        }
                        if ("allows" in subderiv) {
                            subderiv.allows = change(subderiv.allows);
                        }
                    }
                }
            }
        }
        ruleset[newrulename] = rule;
    }
    return ruleset;
}

*/