
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Appointment from './Component/Appointment/Appointment';
import Doctors from './Component/Doctors/Doctors';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Nofound from './Component/Nofound/Nofound';
import Registration from './Component/Registration/Registration';
import Servicedetails from './Component/Services/ServiceDetail/Servicedetails';
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
        <Route path="/doctors">
            <Doctors/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/registration">
            <Registration/>
        </Route>
        <PrivateRoute exact path="/service/:pdid">
            <Servicedetails/>
        </PrivateRoute>
        <PrivateRoute exact path="/appointment">
            <Appointment/>
        </PrivateRoute>
        <Route  path="*">
            <Nofound/>
        </Route>
            </Switch>
            <Footer/>
            </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
