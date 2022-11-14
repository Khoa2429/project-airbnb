import './App.css';
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// Hometemplate
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import RoomTypes from './pages/RoomTypes/RoomTypes';
import RoomList from './pages/RoomList/RoomList';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
// UserTemplate
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
// AdminTemplate
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import AddNewAccount from './pages/Admin/ListAccount/AddNewAccount/AddNewAccount';
import EditAccount from './pages/Admin/ListAccount/EditAccount/EditAccount';
import UpdateImage from './pages/Admin/ListRooms/UpdateImage/UpdateImage';
import UpdateInfoAdmin from './pages/Admin/InfoAdmin/UpdateInfoAdmin';
import AddNewroom from './pages/Admin/ListRooms/AddNewRoom/AddNewRoom';
import ListAccount from './pages/Admin/ListAccount/ListAccount';
import EditRoom from './pages/Admin/ListRooms/EditRoom/EditRoom';
import RoomListSearch from './pages/RoomList/RoomListSearch';
import InfoAdmin from './pages/Admin/InfoAdmin/InfoAdmin';
import ListRooms from './pages/Admin/ListRooms/ListRooms';
import Loading from './_Component/Loading/Loading';

// npx create-react-app friverr
// npm react-router-dom@5.3.0
// npm i react-redux
// npm i redux
// npm i redux-thunk
// npm i lodash
// npm i axios
// npm i moment                           (để định dạng thời gian)
// npm i antd                             (Để lấy mẫu component)
// npm install --save @ant-design/icons   (để lấy icon antd)
// npm install formik --save              (để làm lấy thông tin từ form)
// npm install slick-carousel --save      (để làm slide trượt)
// npm install react-slick --save         (để làm slide trượt)
// npm i redux-devtools-extension
// npm install node-sass --save 
// npm i yup -S


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/roomlist" exact Component={RoomList} />
        <HomeTemplate path="/roomlistsearch" exact Component={RoomListSearch} />
        <HomeTemplate path="/roomtypes" exact Component={RoomTypes} />
        <HomeTemplate path="/roomdetail/:id" exact Component={RoomDetail} />
        <HomeTemplate path="/profile/:idUser" exact Component={Profile} />


        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />


        <AdminTemplate path="/admin/infoadmin" exact Component={InfoAdmin} />
        <AdminTemplate path="/admin/infoadmin/updateinfoadmin" exact Component={UpdateInfoAdmin} />
        <AdminTemplate path="/admin/listaccount" exact Component={ListAccount} />
        <AdminTemplate path="/admin/listaccount/editaccount/:id" exact Component={EditAccount} />
        <AdminTemplate path="/admin/listaccount/addnewaccount" exact Component={AddNewAccount} />
        <AdminTemplate path="/admin/listrooms" exact Component={ListRooms} />
        <AdminTemplate path="/admin/listrooms/addnewroom" exact Component={AddNewroom} />
        <AdminTemplate path="/admin/listrooms/editroom/:id" exact Component={EditRoom} />
        <AdminTemplate path="/admin/listrooms/updateimage/:id" exact Component={UpdateImage} />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch> 
    </Router>
  );
}

export default App;
