import { types } from "../types/types"

const initialState = {
    cats: []
}

export default function catsReducer(state = initialState, action) {
    if (action.type === types.GET_CATS) {
        return {...state, cats: action.payload}
    }

    return state;
}