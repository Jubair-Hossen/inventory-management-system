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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manage-items' element={<ManageItems></ManageItems>}></Route>
        <Route path='/inventory/:id' element={<ManageProduct></ManageProduct>}></Route>
        <Route path='/add-items' element={<AddItems></AddItems>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
