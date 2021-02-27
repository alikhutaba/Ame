import {
    ADD_PATIENT_DETAILS,
    REMOVE_PATIENT_DETAILS,
    ADD_PATIENT_DIAGNOSIS,
    REMOVE_PATIENT_DIAGNOSIS,
    ADD_DIAGNOSIS_NUMBER,
    REMOVE_DIAGNOSIS_NUMBER,
    SAVE_ALL_ALLERGENS,
    SAVE_ALL_PROTOCOLS,
} from "./actionsTypes";


export const addPatient = patient => ({
    type: ADD_PATIENT_DETAILS,
    payload: { patient }
});


export const saveAllAllergens = allergens => ({
    type: SAVE_ALL_ALLERGENS,
    payload: { allergens }
});


export const saveAllProtocols = protocols => ({
    type: SAVE_ALL_PROTOCOLS,
    payload: { protocols }
});


export const addDiagnosisNumber = number => ({
    type: ADD_DIAGNOSIS_NUMBER,
    payload: { number }
});

export const addDiagnosis = newDiagnosis => ({
    type: ADD_PATIENT_DIAGNOSIS,
    payload: { newDiagnosis }
});




