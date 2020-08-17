import {combineReducer} from 'redux';
import news from './news/news.reducer';

const rootReducer = combineReducer({
    news,
})

export default rootReducer;