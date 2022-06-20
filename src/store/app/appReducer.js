import {SET_APP} from "./types";

const initialState = {
    app : "deneme"
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_APP:
            return {
                ...state,
                app: action.app,
            };
        default:
            return state;
    }
}

export default appReducer;