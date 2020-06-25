
import{createStore ,combineReducers} from "redux"
import authReducer from "./reducers/auth"
const rootReducers= combineReducers({
 auth:authReducer
  })

 export const store = createStore(rootReducers)