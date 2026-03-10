import { Route,Routes } from "react-router-dom";
import SignUp from "./components/LoginSignUp/SignUp";
import Login from "./components/LoginSignUp/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Vitrine } from "./components/Vitrine/Vitrine";
import Profile from "./components/profile/Profile";
import Dashboard from './components/dashboard/Dashboard';
import Form_intern from "./components/internship_form/Form_intern";
import Pwd_reset from "./components/LoginSignUp/Pwd_reset";
import ResetCode from "./components/LoginSignUp/ResetCode";
// import DashboardIntern from "./components/profile/DashboardIntern";
import HomeDash from "./components/dashboard/HomeDash";
import UsersList from "./components/dashboard/UsersList";
import Admins from "./components/dashboard/Admins";
import Roadmaps from "./components/dashboard/Roadmaps";
import Publications from "./components/dashboard/Publications";
import Unauthorized from "./components/unauthorized";
import Tasks from "./components/dashboard/Tasks";
import ProfileAdmin from "./components/dashboard/ProfileAdmin";
function App(){
   return(
        <Routes> 
            <Route path="/" element={<Vitrine />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route> 
            <Route path="/vitrine" element={<Vitrine />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route> 
            <Route path="/unauthorized" element={<Unauthorized />}></Route> 

             

            <Route path="/profile" element={<ProtectedRoutes element={<Profile />} allowedRoles={['user','intern','admin']}  />}></Route>
            <Route path="/dashboard" element={<ProtectedRoutes element={<Dashboard />} allowedRoles={[ 'admin']}  />}>
            
                       <Route index element={<HomeDash></HomeDash>} />   
                       <Route path="home_dash" element={<HomeDash></HomeDash>} />
                       <Route path="users" element={<UsersList></UsersList>} />
                       <Route path="admins" element={<Admins></Admins>} />
                       <Route path="roadmaps" element={<Roadmaps></Roadmaps>} />
                       <Route path="publications" element={<Publications></Publications>} />
                       <Route path="tasks" element={<Tasks/>} /> 
                       <Route path="profileAdmin" element={<ProfileAdmin />} />       
            
            </Route> 
            <Route path="/form_intern" element={<ProtectedRoutes element={<Form_intern />} allowedRoles={['intern','user']}  />}></Route>
            <Route path="/reset_code" element={<ResetCode></ResetCode>}></Route>
            <Route path="/pwd_reset" element={<Pwd_reset></Pwd_reset>}></Route>
            {/* <Route path="/dashboardIntern" element={<DashboardIntern></DashboardIntern>}></Route> */}
        </Routes> 

            // <Profile></Profile>
         

   );
}
export default App;