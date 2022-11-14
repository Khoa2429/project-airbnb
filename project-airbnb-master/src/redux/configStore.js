import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyPhongReducer } from "./reducers/QuanLyPhongReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";


const rootReducer = combineReducers({
    // state ứng dụng
    QuanLyNguoiDungReducer,
    QuanLyPhongReducer,
    LoadingReducer,
  });
  

// Cấu hình thunk
const middleware = [thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));