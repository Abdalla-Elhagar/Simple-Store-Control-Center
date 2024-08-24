import { createStore } from "redux";
import { reducer } from "./reducer/reduser";




export const myStore = createStore(reducer)