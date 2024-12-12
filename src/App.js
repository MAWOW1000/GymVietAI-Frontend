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
import InforExercisePage from './components/Home/Content/InforExercisePage/InforExercisePage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import WorkoutPage from './components/Home/Content/WorkoutPage/WorkoutPage';
import PlanWorkoutPage from './components/Home/Content/PlanWorkoutPage/PlanWorkoutPage';
import WorkoutDetailPage from './components/Home/Content/WorkoutDetailPage/WorkoutDetailPage';
import NutritionPage from './components/Home/Content/NutritionPage/NutritionPage';
import PracticeExercise from './components/Home/Content/PracticeExercise/PracticeExercise';

const clientId = '886907766068-vup82vvb0h775013g7rpsfjp6it9p9df.apps.googleusercontent.com';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={
            <GoogleOAuthProvider clientId={clientId}>
              <Login />
            </GoogleOAuthProvider>
          } />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<Forgotpassword />} />
          <Route path='exercise' element={<ExercisePage />} />
          <Route path='information' element={<InforExercisePage />} />
          <Route path='dictionary' element={<DictionaryPage />} />
          <Route path='workout' element={<WorkoutPage />} />
          <Route path='planworkout' element={<PlanWorkoutPage />} />
          <Route path="workout-detail" element={<WorkoutDetailPage />} />
          <Route path="nutrition" element={<NutritionPage />} />
          <Route path='practice' element={<PracticeExercise />} />
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