import { combineReducers } from 'redux';
import { charactersApi } from '../../serviceQueries/characters';

const rootReducer = combineReducers({ [charactersApi.reducerPath]: charactersApi.reducer });

export default rootReducer;
