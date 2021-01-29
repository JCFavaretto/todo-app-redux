import { createStore } from "redux";
import rootReducer from "./reducers/index";

const STORE = createStore(rootReducer);

export default STORE;
