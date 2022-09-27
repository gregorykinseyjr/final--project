import { createStore } from "redux";
import { actionLogin } from "./user/userAction";
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer,
);

export default store;

const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token');


if (user && token) {
    store.dispatch(actionLogin(user, token));
}

store.subscribe(() => console.log("Store updated", store.getState()));

