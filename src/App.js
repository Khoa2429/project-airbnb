import './App.css';
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// Hometemplate
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import JobDetail from './pages/JobDetail/JobDetail';
import JobTypes from './pages/JobTypes/JobTypes';
import JobList from './pages/JobList/JobList';
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
import UpdateImage from './pages/Admin/ListJobs/UpdateImage/UpdateImage';
import UpdateInfoAdmin from './pages/Admin/InfoAdmin/UpdateInfoAdmin';
import AddNewjob from './pages/Admin/ListJobs/AddNewJob/AddNewJob';
import ListAccount from './pages/Admin/ListAccount/ListAccount';
import EditJob from './pages/Admin/ListJobs/EditJob/EditJob';
import JobListSearch from './pages/JobList/JobListSearch';
import InfoAdmin from './pages/Admin/InfoAdmin/InfoAdmin';
import ListJobs from './pages/Admin/ListJobs/ListJobs';
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
        <HomeTemplate path="/joblist" exact Component={JobList} />
        <HomeTemplate path="/joblistsearch" exact Component={JobListSearch} />
        <HomeTemplate path="/jobtypes" exact Component={JobTypes} />
        <HomeTemplate path="/jobdetail/:id" exact Component={JobDetail} />
        <HomeTemplate path="/profile/:idUser" exact Component={Profile} />


        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />


        <AdminTemplate path="/admin/infoadmin" exact Component={InfoAdmin} />
        <AdminTemplate path="/admin/infoadmin/updateinfoadmin" exact Component={UpdateInfoAdmin} />
        <AdminTemplate path="/admin/listaccount" exact Component={ListAccount} />
        <AdminTemplate path="/admin/listaccount/editaccount/:id" exact Component={EditAccount} />
        <AdminTemplate path="/admin/listaccount/addnewaccount" exact Component={AddNewAccount} />
        <AdminTemplate path="/admin/listjobs" exact Component={ListJobs} />
        <AdminTemplate path="/admin/listjobs/addnewjob" exact Component={AddNewjob} />
        <AdminTemplate path="/admin/listjobs/editjob/:id" exact Component={EditJob} />
        <AdminTemplate path="/admin/listjobs/updateimage/:id" exact Component={UpdateImage} />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch> 
    </Router>
  );
}

export default App;
