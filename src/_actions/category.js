import {
    GET_CATEGORY,
    GET_CATEGORY_PENDING
} from '../config/constant';
import API from '../config/api';

export const getCategoryPending = () => {
    return {
        type: GET_CATEGORY_PENDING,
    }
}

export const getCategories = () => {
    return {
        type: GET_CATEGORY,
        payload: API.getCategories()
    }
}
