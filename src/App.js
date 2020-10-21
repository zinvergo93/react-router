import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import NavigationComponent from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';




function App() {
  return (
    <div className="App">
      <Router>
        <h1> React-Router demo</h1>
        <div>
          <NavigationComponent />

          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
            <Route path = "/blog" component = {Blog} />
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
