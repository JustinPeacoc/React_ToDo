
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//components to import
import Login from './components/Login/Login';
import Todo from './components/Todo/Todo';
import Categories from './components/Categories/Categories';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='todo' element={<Todo />}/>
          <Route path='categories' element={<Categories />}/>
          <Route path ='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
