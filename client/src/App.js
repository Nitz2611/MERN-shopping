
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/policy' element={<Policy />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
