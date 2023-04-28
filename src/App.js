import { Route, Routes } from 'react-router-dom';
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';
import Welcome from './Component/pagese/Welcome';
import Header from './Component/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path="login" element={<LogIn />} />
      <Route path='/welcome' element={<Welcome/>}/>
    </Routes>
    </>
  );
}

export default App;

