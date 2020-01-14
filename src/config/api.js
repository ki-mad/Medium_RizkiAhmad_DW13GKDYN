import axios from 'axios';

const RootPath = 'http://localhost:5001/api/v1';

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const getArticles = () => Get('articles');
const getLatestArticles = () => Get('latest_article');
const getCategories = () => Get('categories');
const getCategoryPage = (id) => Get(`article/${id}`);
const getArticlePage = (id) => Get(`articleComment/${id}`);

const API = {
    getArticles,
    getLatestArticles,
    getCategories,
    getCategoryPage,
    getArticlePage
}

export default API;