import { rootSaga, rootReducers } from "@/redux/store/root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export default store;
