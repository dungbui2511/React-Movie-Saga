import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieSlice from "./feature/movieSlice";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
const store =  configureStore({
    reducer:{
        movie: movieSlice
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga);
export default store;