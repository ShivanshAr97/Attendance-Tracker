import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'
import Subject from './components/Subject'
import AddSubject from './components/AddSubject';
import NewSubject from './components/NewSubject';
import Total from './components/Total';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sub' element={<Subject />} />
        <Route path='/' element={<Total />} />
        <Route path='/addsub' element={<AddSubject />} />
        <Route path='/newsub' element={<NewSubject />} />
        <Route path='/total' element={<Total />} />

      </Routes>
    </>
  );
}

export default App;
