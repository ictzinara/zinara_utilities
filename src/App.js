import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Tollgate from './components/Pages/Tollgate';
import Vehicle from './components/Pages/Vehicle';
import MapContainer from './components/Pages/MapContainer';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/tollgates' exact component={Tollgate} />
            <Route path='/vehicles' exact component={Vehicle} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
