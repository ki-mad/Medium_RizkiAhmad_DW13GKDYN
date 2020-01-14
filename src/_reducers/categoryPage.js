import {
    GET_CATEGORYPAGE_PENDING,
    GET_CATEGORYPAGE_FULFILLED,
    GET_CATEGORYPAGE_REJECTED
} from '../config/constant';

const initState = {
    dataCategoryPage: [],
    isLoading: false,
    err:true,
};

const categoryPage = (state = initState, action) => {
    switch (action.type) {
        case GET_CATEGORYPAGE_FULFILLED:
            return {
                ...state,
                dataCategoryPage: action.payload,
                isLoading:false
            };
        case GET_CATEGORYPAGE_PENDING:
            return {
                ...state,
                isLoading:true
            };
        case GET_CATEGORYPAGE_REJECTED:
            return {
                ...state,
                isLoading:false,
                err:true
            };
        default:
            return state;
    }
}

export default categoryPage;