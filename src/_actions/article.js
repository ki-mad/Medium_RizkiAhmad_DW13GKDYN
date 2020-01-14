import {
    GET_ARTICLES, 
    GET_ARTICLES_PENDING,
    GET_LATEST_ARTICLES,
    GET_LATEST_ARTICLES_PENDING,
    GET_ARTICLEPAGE,
    GET_ARTICLEPAGE_PENDING
} from '../config/constant';
import API from '../config/api';

export const getArticlesPending = () => {
    return {
        type: GET_ARTICLES_PENDING,
    }
}

export const getArticles = () => {
    return {
        type: GET_ARTICLES,
        payload: API.getArticles()
    }
}

export const getLatestArticles = () => {
    return {
        type: GET_LATEST_ARTICLES,
        payload: API.getLatestArticles()
    }
}

export const getLatestArticlesPending = () => {
    return {
        type: GET_LATEST_ARTICLES_PENDING,
    }
}

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
