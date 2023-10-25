import { createReducer } from "@ngrx/store";

const initialState = 0;

// export const counterReducer = createReducer(
//     initialState
// );

// Alternative/Older way
export function counterReducer(state = initialState) {
    return state;
}