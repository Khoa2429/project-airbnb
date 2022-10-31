import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyCongViecReducer } from "./reducers/QuanLyCongViecReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";


const rootReducer = combineReducers({
    // state ứng dụng
    QuanLyNguoiDungReducer,
    QuanLyCongViecReducer,
    LoadingReducer,
  });
  

// Cấu hình thunk
const middleware = [thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));