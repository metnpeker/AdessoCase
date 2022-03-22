import { createStore } from "redux";
import unitsReducer from "reducers/unitsReducer";

function configureStore(state = { rotating: true }) {
  return createStore(unitsReducer,state);
}

export default configureStore;