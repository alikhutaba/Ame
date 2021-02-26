import {
    SAVE_ALL_ALLERGENS,
    SAVE_ALL_PROTOCOLS
} from "../actionsTypes";

const initialState = {
    allergensDB: [],
    protocolsDB: [],
    logedinUser: {},
};

const allergensReducers = (state = initialState, action) => {

    switch (action.type) {
        case SAVE_ALL_ALLERGENS: {
            const { allergens } = action.payload;
            return {
                ...state,
                allergensDB: allergens,
            };
        }

        case SAVE_ALL_PROTOCOLS: {
            const { protocols } = action.payload;
            return {
                ...state,
                protocolsDB: protocols,
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

export default allergensReducers;