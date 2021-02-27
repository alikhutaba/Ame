import {
    ADD_PATIENT_DETAILS,
    REMOVE_PATIENT_DETAILS,
    ADD_PATIENT_DIAGNOSIS,
    REMOVE_PATIENT_DIAGNOSIS,
    ADD_DIAGNOSIS_NUMBER,
    REMOVE_DIAGNOSIS_NUMBER,
} from "./../actionsTypes";

const initialState = {
    patientData: {},
    diagnosis: [],
    diagnosisNumber: 1,
};

const patientReducers = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PATIENT_DETAILS: {
            const { patient } = action.payload;
            return {
                ...state,
                patientData: patient,
            };
        }

        case ADD_DIAGNOSIS_NUMBER: {
            const { number } = action.payload;
            return {
                ...state,
                diagnosisNumber: number,
            };
        }

        case ADD_PATIENT_DIAGNOSIS: {
            const { newDiagnosis } = action.payload;
            return {
                ...state,
                diagnosis: [...state.diagnosis, newDiagnosis],
            };
        }

        // case TOGGLE_TODO: {
        //     const { id } = action.payload;

        //     let newState = { ...state };
        //     let index = newState.todos.findIndex((task) => task.id === id);
        //     if (index > -1) {
        //         newState.todos[index].completed = !newState.todos[index].completed;
        //     }
        //     return newState;
        // }

        // case REMOVE_TODO: {
        //     const { id } = action.payload;

        //     let newState = { ...state };
        //     let index = newState.todos.findIndex((task) => task.id === id);
        //     if (index > -1) {
        //         newState.todos.splice(index, 1);
        //     }

        //     return newState;
        // }

        default:
            return state;
    }
};

export default patientReducers;