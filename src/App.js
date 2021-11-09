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
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard/AdminDashboard";

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/adminDashboard">
              <AdminDashboard />
            </PrivateRoute>
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
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
