import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

//Components
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router>
      <Navbar/>
        {/* SideDrawer */}
        {/* Backdrop */}
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
