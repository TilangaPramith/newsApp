import newsActionType from './news.types';

const getArticles = () => {
    return {
        type: newsActionType.GET_ARTICLES,
    }
}

export { getArticles }; 