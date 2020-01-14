import {
    GET_ARTICLES_FULFILLED,
    GET_ARTICLES_PENDING,
    GET_ARTICLES_REJECTED,
    GET_LATEST_ARTICLES_FULFILLED,
    GET_LATEST_ARTICLES_PENDING,
    GET_LATEST_ARTICLES_REJECTED,
    GET_ARTICLEPAGE_PENDING,
    GET_ARTICLEPAGE_FULFILLED,
    GET_ARTICLEPAGE_REJECTED
} from '../config/constant';

const initState = {
    dataArticle: [],
    isLoading: false,
    err:true,
    dataLatestArticle: [],
    dataArticlePage: []
};

const article = (state = initState, action) => {
    switch (action.type) {
        case GET_ARTICLES_FULFILLED:
            return {
                ...state,
                dataArticle: action.payload,
                isLoading:false
            };
        case GET_ARTICLES_PENDING:
            return {
                ...state,
                isLoading:true
            };
        case GET_ARTICLES_REJECTED:
            return {
                ...state,
                isLoading:false,
                err:true
            };
        case GET_LATEST_ARTICLES_FULFILLED:
            return {
                ...state,
                dataLatestArticle: action.payload,
                isLoading:false
            };
        case GET_LATEST_ARTICLES_PENDING:
            return {
                ...state,
                isLoading:true
            }
        case GET_LATEST_ARTICLES_REJECTED:
            return {
                ...state,
                isLoading:false,
                err:true
            };
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

export default article;