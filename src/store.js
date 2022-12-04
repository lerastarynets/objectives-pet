import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './serviceQueries/characters';
import rootReducer from './store/reducers';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(charactersApi.middleware),
});

export default store;
