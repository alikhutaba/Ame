import {
    ADD_NEW_PATIENT_DETAILS,
    ADD_NEW_PATIENT_DIAGNOSIS,
    ADD_NEW_DIAGNOSIS_NUMBER,
    SAVE_ALL_ALLERGENS,
    SAVE_ALL_PROTOCOLS,
    ADD_DEMO,
    REMOVE_DEMO,
} from "./actionsTypes";


export const addPatient = patient => ({
    type: ADD_NEW_PATIENT_DETAILS,
    payload: { patient }
});

export const addDiagnosisNumber = number => ({
    type: ADD_NEW_DIAGNOSIS_NUMBER,
    payload: { number }
});

export const addDiagnosis = newDiagnosis => ({
    type: ADD_NEW_PATIENT_DIAGNOSIS,
    payload: { newDiagnosis }
});





export const saveAllAllergens = allergens => ({
    type: SAVE_ALL_ALLERGENS,
    payload: { allergens }
});


export const saveAllProtocols = protocols => ({
    type: SAVE_ALL_PROTOCOLS,
    payload: { protocols }
});









export const addDemo = demo => ({
    type: ADD_DEMO,
    payload: { demo }
});


export const removeDemo = demo => ({
    type: REMOVE_DEMO,
    payload: { demo }
});







