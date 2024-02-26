
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import PageNotFound from './pages/PageNotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Auth/Register'
import './styles/AuthStyle.css'
// import Login from './pages/Auth/Login'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/login' element={<Login />}></Route> */}
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/policy' element={<Policy />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
