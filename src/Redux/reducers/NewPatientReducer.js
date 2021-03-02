import {
    ADD_NEW_PATIENT_DETAILS,
    ADD_NEW_PATIENT_DIAGNOSIS,
    ADD_NEW_DIAGNOSIS_NUMBER,
    ADD_DEMO,
    REMOVE_DEMO,
} from "../actionsTypes";

const initialState = {
    patientData: {},
    diagnosis: [],
    diagnosisNumber: 0,
    patientDemo: {
        fisrtName: "",
        lastName: "",
        middleName: "",
    },
};

const patientReducers = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_PATIENT_DETAILS: {
            const { patient } = action.payload;
            return {
                ...state,
                patientData: patient,
            };
        }

        case ADD_NEW_PATIENT_DIAGNOSIS: {
            const { newDiagnosis } = action.payload;
            return {
                ...state,
                diagnosis: [...state.diagnosis, newDiagnosis],
            };
        }

        case ADD_NEW_DIAGNOSIS_NUMBER: {
            const { number } = action.payload;
            return {
                ...state,
                diagnosisNumber: number,
            };
        }





        case ADD_DEMO: {
            const { demo } = action.payload;
            return {
                ...state,
                patientDemo: demo,
            };
        }


        case REMOVE_DEMO: {
            const { demo } = action.payload;
            return {
                ...state,
                patientDemo: demo,
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