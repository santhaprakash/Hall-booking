import logo from './logo.svg';
import './App.css';
import Login from './Page/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Page/Home';
// import Book from './Page/Book';
// import Booked from './Page/Booked';
import Period from './Page/Period';
import Hall from './Page/Hall';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/:hall/:id/period" element={<Period />} />
        </Routes>
        <Routes>
          <Route path="/:hall/:id" element={<Hall />} />
        </Routes>
      
        {/* <Routes>
          <Route path="/:id" element={<Book />} />
        </Routes>
        <Routes>
          <Route path="/:day/:id" element={<Booked />} />
        </Routes> */}
       
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
