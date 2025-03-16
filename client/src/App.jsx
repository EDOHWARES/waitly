
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
