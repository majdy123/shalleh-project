import React  from 'react';
import { Route ,Routes} from 'react-router-dom';
import Signin from './component/signin/Signin';
import Home from './component/home/Home';
import NotFound from './component/notfound/NotFound'
import Admin from './component/admin/Admin'
import View from './component/view/View'
import Details from './component/detils/Details'
import Admin_pri from './component/admin/admin-primary/AdminPrimary'
import Shaleh_admin_reg from './component/shaleh-admin/ShalehAdmin'
 


function App() {
  return (
    <>
    <Routes>
 
      
      <Route path="/" element={<Home />}>
      <Route path="/home" element={<Home />}/></Route>

      <Route path="/SignIn" element = {<Signin />} />
      <Route path="/View" element = {<View />} />
      <Route path="/shaleh_user" element = {<Shaleh_admin_reg />} />
      <Route path="/admin_auth" element = {<Admin_pri />} />
      <Route path="/view/details" element = {<Details />} />
     
      <Route path='*' element = {<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
