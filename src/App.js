import './style/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import pages
import about from './pages/about';
import explore from './pages/explore';
import journal from './pages/journal';
import search from './pages/search';
import Home from './pages/home'

function App() {


      return (
          <div className="App">
            <Router>
                <Navbar/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={about}/>
                <Route path='/explore' component={explore}/>
                <Route path='/journal' component={journal}/>
                <Route path='/search' component={search}/>
              </Switch>
              
            </Router>
          </div>
  );
}

export default App;
