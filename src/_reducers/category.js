import {
    GET_CATEGORY_PENDING,
    GET_CATEGORY_FULFILLED,
    GET_CATEGORY_REJECTED
} from '../config/constant';

const initState = {
    dataCategory: [],
    isLoading: false,
    err:true,
};

const category = (state = initState, action) => {
    switch (action.type) {
        case GET_CATEGORY_FULFILLED:
            return {
                ...state,
                dataCategory: action.payload,
                isLoading:false
            };
        case GET_CATEGORY_PENDING:
            return {
                ...state,
                isLoading:true
            };
        case GET_CATEGORY_REJECTED:
            return {
                ...state,
                isLoading:false,
                err:true
            };
        default:
            return state;
    }
}

export default category;