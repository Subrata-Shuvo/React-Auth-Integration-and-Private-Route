import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shippings from './components/Shippings/Shippings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <PrivateRoute path="/shippings">
          <Shippings></Shippings>
        </PrivateRoute>
        <PrivateRoute path="/placeorder">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
