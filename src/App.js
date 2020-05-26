import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from './components/pages/admin/Login';


function App() {
  return (
    <Router>
    <div className="App">
     
      <Switch>
        <Route path="/admin">
            <Login />
        </Route>                            
        </Switch>

    </div>
    </Router>
  );
}

export default App;
