import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Explore from "./Pages/Explore/Explore";
import SingleProducts from "./Pages/Home/SingleProducts/SingleProducts";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/products/:id">
              <SingleProducts />
            </PrivateRoute>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
