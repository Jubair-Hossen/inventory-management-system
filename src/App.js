import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Header from './Components/Header/Header';
import AddItems from './Pages/AddItems/AddItems';
import { ToastContainer } from 'react-toastify';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import ManageItems from './Pages/ManageItems/ManageItems';
import PasswordReset from './Components/PasswordReset/PasswordReset';
import Footer from './Components/Footer/Footer';
import ProtectedRout from './Components/ProtectedRout/ProtectedRout';
import MyItems from './Pages/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/manage-items' element={
          <ProtectedRout>
            <ManageItems></ManageItems>
          </ProtectedRout>}>
        </Route>

        <Route path='/inventory/:id' element={
          <ProtectedRout>
            <ManageProduct></ManageProduct>
          </ProtectedRout>}>
        </Route>

        <Route path='/add-items' element={
          <ProtectedRout>
            <AddItems></AddItems>
          </ProtectedRout>}>
        </Route>

        <Route path='/my-items' element={
          <ProtectedRout>
            <MyItems></MyItems>
          </ProtectedRout>}>
        </Route>

        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/resetpassword' element={<PasswordReset></PasswordReset>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
