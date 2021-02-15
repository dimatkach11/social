import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogs-reducer';
import todoReducer from './todo-reducer';
import navMenuReducer from './navmenu-reducer';

const reducers = combineReducers({
  dialogs: dialogsReducer,
  todo: todoReducer,
  navMenu: navMenuReducer
})

const store = createStore(reducers)
window._store = store
export default store