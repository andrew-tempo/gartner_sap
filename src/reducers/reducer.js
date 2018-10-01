import * as types from './types';

const reducer = (state, action) => {

    switch (action.type) {
        case types.TOGGLE_FILTER:
            if(state.filters.indexOf(action.payload) !== -1){
                var idx = state.filters.indexOf(action.payload);
                var newFilters = [...state.filters];
                newFilters.splice(idx,1);
                return {
                    ...state,
                    filters: newFilters
                }
            }
            else {
                return {
                    ...state,
                    filters:[...state.filters,action.payload]
                }
            }
        default :
            return state;
    }
}

export default reducer;