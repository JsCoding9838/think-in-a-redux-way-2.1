import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import myLogger from "./middlewares/myLogger";
import { composeWithDevTools } from "redux-devtools-extension";

// import counterReducer from "./counter/counterReducer";
// import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));

export default store;