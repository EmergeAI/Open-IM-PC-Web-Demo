import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import rootReducer from './reducers';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkAppAction<R = void> = ThunkAction<R, RootState, unknown, Action<string>>;

export type ThunkAppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;
