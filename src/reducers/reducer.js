import * as types from './types';
import {initialState} from './store';

const reducer = (state, action) => {
// console.log(initialState);
    switch (action.type) {
        case types.TOGGLE_FILTER:
            var newResults = [];
            var newFilters = [...state.filters];


            if(state.filters.indexOf(action.payload) !== -1){
                var idx = state.filters.indexOf(action.payload);
                newFilters.splice(idx,1);

                if(newFilters.length===0) {
                    return {
                        ...initialState
                    }
                } else {
                    for(let i = 0; i< initialState.results.length; i++){
                        let push = false;
                        if(initialState.results[i].category.find( e => newFilters.indexOf(e) !== -1)){
                            push = true;
                        }
                        if(push) {
                            newResults = newResults.concat(initialState.results[i])
                        }
                    }
                    return {
                        ...state,
                        filters:newFilters,
                        results:newResults
                    }
                }
            }
            else {
                newFilters = [...state.filters, action.payload]; 
                for(let i = 0; i< initialState.results.length; i++){
                    let push = false;
                    if(initialState.results[i].category.find( e => newFilters.indexOf(e) !== -1)){
                        push = true;
                    }
                    if(push) {
                        newResults = newResults.concat(initialState.results[i])
                    }
                }
                return {
                    ...state,
                    filters:[...state.filters,action.payload],
                    results: newResults
                }
            }
        default :
            return state;
    }
}

export default reducer;