import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

//Components
import Navbar from './components/Navbar.js';
import Backdrop from './components/Backdrop.js';
import SideDrawer from './components/SideDrawer.js';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        <main>
          <Switch>
            <Route exact path='/' components={HomeScreen}/>
            <Route exact path='/product/:id' components={ProductScreen}/>
            <Route exact path='/cart' components={CartScreen}/>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
