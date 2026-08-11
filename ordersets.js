/* ============================================================
   ordersets.js  — content file for the Medical Admission Note tool
   Written by the built-in Editor on 11/08/2026, 5:13:47 am

   Save this beside admission-note.html, replacing the old copy.
   Hand editing is fine: every piece of text sits in "double quotes"
   and every item except the last in a list ends with a comma.
   ============================================================ */

var ADMISSION_DATA = {
  "config": {
    "service": "General Medicine",
    "version": "1.9 beta",
    "lastUpdated": "11 August 2026",
    "editorKey": "genmed",
    /* Face for the note: "sans" matches the interface, "serif" is softer for
       prose, "mono" is what you need if a template lines up columns. */
    "noteFont": "sans",

    "gatedMinAge": 65,
    "ageGatedLabels": [
      "Rockwood",
      "EPOA/ACP"
    ],
    "labelOrderSets": false,
    "planHeading": "PLAN:",
    "planEndMarker": "",
    "examHeading": "O/E:",
    "examEndMarker": "INVESTIGATIONS:"
  },
  "skeletonLines": [
    "Medical Admission Note",
    "RMO: []",
    "SMO: []",
    "",
    "[XX]-year-old [male/female] referred by [] with []",
    "",
    "HxPC:",
    "[]",
    "",
    "PMHx:",
    "[]",
    "",
    "MEDICATIONS:",
    "[]",
    "",
    "Allergies/ADRs: []",
    "",
    "SOCIAL HISTORY:",
    "Living situation: []",
    "Employment: []",
    "Rockwood CFS: []",
    "Smoking/alcohol: []",
    "EPOA/ACP: []",
    "",
    "O/E:",
    "Vitals: []",
    "[Pertinent exam findings]",
    "",
    "INVESTIGATIONS:",
    "Bloods: []",
    "Imaging: []",
    "ECG: []",
    "Urine: []",
    "Other: []",
    "",
    "IMPRESSION:",
    "[]",
    "",
    "PLAN:",
    "Admit []",
    "[]",
    "Goals of care: []"
  ],
  "examTemplates": [
    {
      "name": "Neuro — simple",
      "lines": [
        "Cranial nerves:",
        "[]",
        "",
        "UL",
        "Tone []",
        "Power []",
        "Reflexes []",
        "Coordination []",
        "Sensation []",
        "",
        "LL",
        "Tone []",
        "Power []",
        "Reflexes []",
        "Coordination []",
        "Sensation []",
        "",
        "Gait",
        "[]"
      ]
    },
    {
      "name": "Neuro — complex",
      "lines": [
        "NEURO   (right / left, power MRC 0-5)",
        "Higher function / speech: [   ]",
        "Cranial nerves II-XII: [   ]",
        "",
        "UPPER LIMB",
        "Tone: [  /  ]   Pronator drift: [  /  ]",
        "Power:",
        "  C5 shoulder abduction: [  /  ]",
        "  C6 wrist extension: [  /  ]",
        "  C7 elbow extension: [  /  ]",
        "  C8 finger flexion (FDP): [  /  ]",
        "  T1 finger abduction (interossei): [  /  ]",
        "Reflexes: biceps C5-6 [  /  ]   triceps C7 [  /  ]",
        "Coordination finger-nose: [  /  ]",
        "",
        "LOWER LIMB",
        "Tone: [  /  ]   Ankle clonus: [  /  ]",
        "Power:",
        "  L2 hip flexion: [  /  ]",
        "  L3 knee extension: [  /  ]",
        "  L4 ankle dorsiflexion: [  /  ]",
        "  L5 great toe extension (EHL): [  /  ]",
        "  S1 ankle plantarflexion: [  /  ]",
        "  S2 knee flexion: [  /  ]",
        "Reflexes: knee L3-4 [  /  ]   ankle S1 [  /  ]",
        "Plantars: [  /  ]   Coordination heel-shin: [  /  ]",
        "",
        "SENSATION",
        "Light touch / pinprick UL: [  /  ]   LL: [  /  ]",
        "Vibration + proprioception great toe: [  /  ]",
        "Sensory level: [   ]   Saddle / perianal: [   ]",
        "",
        "GAIT: [   ]   Heel-toe: [   ]   Romberg: [   ]",
        "Comment: [   ]"
      ]
    }
  ],
  "orderSets": [
    {
      "name": "Core",
      "pin": true,
      "aliases": "every admission general routine baseline all",
      "lines": [
        "Bloods: []",
        "EDD: []",
        "VTE prophylaxis: []"
      ]
    },
    {
      "name": "AKI",
      "aliases": "acute kidney injury renal creatinine",
      "lines": [
        "Nephrotoxic medicines withheld: []",
        "IVF: []",
        "Repeat labs: []",
        "Urinalysis/imaging: []"
      ],
      "pin": false
    },
    {
      "name": "Asthma",
      "aliases": "exacerbation wheeze bronchospasm",
      "lines": [
        "Severity assessment: []",
        "Bronchodilators: []",
        "Steroids: []",
        "Peak flow on admission and monitoring: []",
        "Inhaler technique review and action plan: []"
      ],
      "pin": false
    },
    {
      "name": "Atrial fibrillation",
      "aliases": "AF flutter fast arrhythmia",
      "lines": [
        "Rate/rhythm control: []",
        "If new diagnosis, anticoagulation (CHA2DS2-VASc vs HAS-BLED): []",
        "TSH, electrolytes: []",
        "Telemetry: []",
        "Echo if applicable: []"
      ],
      "pin": false
    },
    {
      "name": "Cellulitis",
      "aliases": "skin soft tissue infection erysipelas",
      "lines": [
        "Antibiotics: []",
        "Limb elevation: []",
        "Wound care: []",
        "Review at 24-48 hours for oral switch: []"
      ],
      "pin": false
    },
    {
      "name": "COPD",
      "aliases": "exacerbation AECOPD chronic obstructive emphysema",
      "lines": [
        "Bronchodilators: []",
        "Steroids: []",
        "Antibiotics: []",
        "Target SpO2: []",
        "Inhaler technique and smoking cessation: []"
      ],
      "pin": false
    },
    {
      "name": "DVT",
      "aliases": "deep vein thrombosis VTE leg clot",
      "lines": [
        "Provoked or unprovoked, risk factors: []",
        "Imaging: []",
        "Anticoagulation: []",
        "Planned duration of anticoagulation: []",
        "Follow-up arrangements: []"
      ],
      "pin": false
    },
    {
      "name": "Falls / collapse",
      "aliases": "fall mechanical off legs",
      "lines": [
        "Collateral history: []",
        "Postural blood pressures (x3)",
        "Medication review: []",
        "ECG: []",
        "Telemetry: []",
        "MDT input: []"
      ],
      "pin": false
    },
    {
      "name": "Flu / viral illness",
      "aliases": "influenza COVID respiratory virus RSV",
      "lines": [
        "Viral testing: []",
        "Infection control/precautions: []",
        "Oseltamivir if <48h of onset: []",
        "Target SpO2: []",
        "Supportive care: []"
      ],
      "pin": false
    },
    {
      "name": "Gastroenteritis",
      "aliases": "diarrhoea vomiting food poisoning D&V",
      "lines": [
        "Stool spec for faecal PCR: []",
        "Rehydration plan: []",
        "Infection control/precautions: []",
        "Food, travel and contact history: []",
        "Nephrotoxics withheld if dehydrated: []"
      ],
      "pin": false
    },
    {
      "name": "Heart failure",
      "aliases": "CCF LVF pulmonary oedema fluid overload",
      "lines": [
        "Daily weights and strict fluid balance",
        "Diuretic plan: []",
        "Daily renal function and electrolytes",
        "Fluid restriction: []",
        "Echocardiogram: []"
      ],
      "pin": false
    },
    {
      "name": "NSTEMI / ACS",
      "aliases": "chest pain troponin myocardial infarction unstable angina",
      "lines": [
        "Repeat troponin: []",
        "Repeat ECG and review if recurrent pain",
        "Antiplatelet and anticoagulation: []",
        "Cardiology input +/- echo: []",
        "Secondary prevention: []"
      ],
      "pin": false
    },
    {
      "name": "PE",
      "aliases": "pulmonary embolism VTE clot",
      "lines": [
        "Provoked or unprovoked, risk factors: []",
        "Imaging: []",
        "Anticoagulation: []",
        "Planned duration of anticoagulation: []",
        "Follow-up arrangements: []"
      ],
      "pin": false
    },
    {
      "name": "Pneumonia",
      "aliases": "CAP LRTI chest infection consolidation",
      "lines": [
        "Antibiotics: []",
        "Aim oral transition tomorrow if improving",
        "Blood cultures if febrile, sputum if able to expectorate: []",
        "Target SpO2: []"
      ],
      "pin": false
    },
    {
      "name": "Syncope",
      "aliases": "blackout collapse transient loss of consciousness LOC",
      "lines": [
        "Repeat ECG: []",
        "Telemetry: []",
        "Postural blood pressures (x3)",
        "Medication review: []",
        "Collateral history: []",
        "Driving advice given: []"
      ],
      "pin": false
    },
    {
      "name": "TIA / stroke",
      "aliases": "CVA cerebrovascular infarct weakness",
      "lines": [
        "Antiplatelet or anticoagulation: []",
        "Swallow screen before oral intake",
        "Telemetry: []",
        "Imaging (brain, carotid, Echo): []",
        "MDT input: []"
      ],
      "pin": false
    },
    {
      "name": "UGIB",
      "aliases": "upper gastrointestinal bleed haematemesis melaena",
      "lines": [
        "Group and hold + two pIVCs",
        "Transfusion/resuscitation: []",
        "Anticoagulants and antiplatelets withheld: []",
        "PPI: []",
        "Endoscopy referral: []"
      ],
      "pin": false
    },
    {
      "name": "UTI / pyelonephritis",
      "aliases": "urinary tract infection urosepsis catheter",
      "lines": [
        "Urine culture before antibiotics",
        "Antibiotics: []",
        "Imaging if obstruction or stone suspected: []",
        "Catheter reviewed if applicable: []",
        "Review at 24-48 hours for oral switch: []"
      ],
      "pin": false
    }
  ]
};
