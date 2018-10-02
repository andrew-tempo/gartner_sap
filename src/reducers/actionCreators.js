import * as types from './types';

export const toggleFilter = (filter) => {
    return {
        type: types.TOGGLE_FILTER,
        payload: filter
    }
}
