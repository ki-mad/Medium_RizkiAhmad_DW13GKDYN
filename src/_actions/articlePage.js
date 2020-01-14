import {
    GET_ARTICLEPAGE,
    GET_ARTICLEPAGE_PENDING
} from '../config/constant';
import API from '../config/api';

export const getArticlePagePending = () => {
    return {
        type: GET_ARTICLEPAGE_PENDING,
    }
}

export const getArticlePage = (id) => {
    return {
        type: GET_ARTICLEPAGE,
        payload: API.getArticlePage(id)
    }
}
