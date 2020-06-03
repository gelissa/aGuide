import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Memorial from './pages/Memorial'
import Resources from './pages/Resources'
import Donations from './pages/Donations'
import Guide from './pages/Guides'
import Navbar from './components/Nav/Nav'
import Header from './components/Header/Header'

function App() {
  return (
  
    <Router>
 
      <Navbar />
      <Header />  
    <div className="container">
      <Switch>
        <Route exact path="/" component={Memorial} />
        <Route  path="/home" component={Memorial} />
        <Route  path="/resources" component={Resources} />
        <Route  path="/donations" component={Donations} />
        <Route path="/guides" component={Guide} />
      </Switch>
    </div>
    </Router>
 
  );
}

export default App;
