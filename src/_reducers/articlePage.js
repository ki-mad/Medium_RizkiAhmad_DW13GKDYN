import {
    GET_ARTICLEPAGE_PENDING,
    GET_ARTICLEPAGE_FULFILLED,
    GET_ARTICLEPAGE_REJECTED
} from '../config/constant';

const initState = {
    dataArticlePage: [],
    isLoading: false,
    err:true,
};

const articlePage = (state = initState, action) => {
    switch (action.type) {
        case GET_ARTICLEPAGE_FULFILLED:
            return {
                ...state,
                dataArticlePage: action.payload,
                isLoading:false
            };
        case GET_ARTICLEPAGE_PENDING:
            return {
                ...state,
                isLoading:true
            };
        case GET_ARTICLEPAGE_REJECTED:
            return {
                ...state,
                isLoading:false,
                err:true
            };
        default:
            return state;
    }
}

export default articlePage;