import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  BrowserRouter,
  Routes,
} from 'react-router-dom';

function App() {
  const user = false;
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/signup"
            element={user ? <Home /> : <Register />}
          ></Route>
          <Route
            path="/login"
            element={user ? <Home /> : <Login />}
          ></Route>
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          ></Route>
          <Route
            path="/write"
            element={user ? <Write /> : <Login />}
          ></Route>
          <Route path="/post/:postId" element={<Single />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
