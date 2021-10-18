
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Appointment from './Component/Appointment/Appointment';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';
import Terms from './Component/Terms&policy/Terms';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header/>
            <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/terms">
            <Terms/>
        </Route>
        <Route exact path="/about">
            <About/>
        </Route>
        <Route exact path="/login">
            <Login/>
        </Route>
        <Route exact path="/registration">
            <Registration/>
        </Route>
        <PrivateRoute exact path="/appointment">
            <Appointment/>
        </PrivateRoute>
        <Route  path="*">
            <Registration/>
        </Route>
            </Switch>
            </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
