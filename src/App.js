import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
// 347370be
function App() {
  return (
    <div className="App">
     <h2>Redux toolkit with Saga</h2>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/movie/:id' element={<Movie/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
