import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import IndexPage from './components/pages/IndexPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
export default App;
