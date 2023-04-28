import { Route, Routes } from 'react-router-dom';
import SignUp from './Component/SignUp';
// import LogIn from './Component/LogIn';
// import Welcome from './Component/pages/Welcome';
// import CompleteProfile from './Component/pages/CompleteProfile';
import Header from './Component/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<SignUp/>} />
      
    </Routes>
    </>
  );
}

export default App;

