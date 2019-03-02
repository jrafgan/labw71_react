import {
    DELETE_DISH, EDIT_DISH, EDIT_EACH_LINE,
    FETCH_DISHES_FAILURE,
    FETCH_DISHES_FINALLY,
    FETCH_DISHES_REQUEST,
    FETCH_DISHES_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    loading: false,
    dishMenu: null,
    error: '',
    itemToEdit: null,
};

const dishReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_DISHES_REQUEST:
            return {...state, loading: true};

        case FETCH_DISHES_SUCCESS:
            let dishes = action.dishes;
            let dishes2 = Object.keys(dishes).map(id=>({
                    ...dishes[id],
                    id
                }));
            return {...state, loading: false, dishMenu: dishes2};

        case FETCH_DISHES_FAILURE:
            return {...state, loading: false, error: action.error};

        case FETCH_DISHES_FINALLY:
            return {...state, loading: false};


        case DELETE_DISH:
            let copy = state.dishMenu;
            const ndx = copy.findIndex(item=>item.id===action.id);
            copy.splice(ndx, 1);
            return {...state, loading: false, dishMenu: copy};

        case EDIT_DISH:
            const ndx2 = state.dishMenu.findIndex(item=>item.id===action.id);
            const item = state.dishMenu[ndx2];
            return {...state, itemToEdit: item};

        case EDIT_EACH_LINE:
            let copy2 = state.itemToEdit;
            const {name: value} = action.target;

            return {...state, itemToEdit: {name:}};

        default:
            return state;
    }
};

export default dishReducer;