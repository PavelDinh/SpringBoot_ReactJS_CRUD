import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeeComponent from './components/CreateEmployeeeComponent';
import UpdateEmployeeeComponent from './components/UpdateEmployeeComponent'

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListEmployeeComponent}></Route>
                <Route path="/employees" component={ListEmployeeComponent}></Route>
                <Route path="/add-employee/:id" component={CreateEmployeeeComponent}></Route>
                {/*<Route path="/update-employee/:id" component={UpdateEmployeeeComponent}></Route>*/}
              </Switch>
            </div>
          <FooterComponent />
       </Router>
    </div>
  );
}

export default App;
