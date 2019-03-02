import {ADD_NEW_DISH} from "../actions/actionTypes";


const initialState = {
    name: '',
    cost: '',
    url: '',
};

const addNewDishReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_DISH:
            console.log(action.param.name);
            const {name, value} = action.param;
            return {
                ...state,
                [name]: value,
            };

        default:
            return state;
    }
};

export default addNewDishReducer;