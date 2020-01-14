import {
    GET_CATEGORYPAGE,
    GET_CATEGORYPAGE_PENDING
} from '../config/constant';
import API from '../config/api';

export const getCategoryPagePending = () => {
    return {
        type: GET_CATEGORYPAGE_PENDING,
    }
}

export const getCategoryPage = (id) => {
    return {
        type: GET_CATEGORYPAGE,
        payload: API.getCategoryPage(id)
    }
}
