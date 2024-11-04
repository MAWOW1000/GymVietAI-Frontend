import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import ManageUser from './components/Admin/ManageUser/ManageUser';
import ManageExercise from './components/Admin/ManageExercise/ManageExercise';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Content/HomePage/HomePage';
import Login from './components/Home/Content/Login/Login'
import Register from './components/Home/Content/Register/Register'
import Forgotpassword from './components/Home/Content/ForgotPassword/Forgotpassword'
import Home from './components/Home/Home';
import ExercisePage from './components/Home/Content/ExercisePage/ExercisePage';
import DictionaryPage from './components/Home/Content/DictionaryPage/DictionaryPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<Forgotpassword />} />
          <Route path='exercise' element={<ExercisePage />} />
          <Route path='dictionary' element={<DictionaryPage />} />
        </Route>

        <Route path='admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='manage-user' element={<ManageUser />} />
          <Route path='manage-exercise' element={<ManageExercise />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
{/* <Route path='/' element={<App />}></Route> */ }