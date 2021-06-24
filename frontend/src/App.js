import './App.css';
import Calender from './components/Calender/Calender';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddInformation from './components/AddInformation/AddInformation';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Calender />
          </Route>
          <Route exact path="/add">
            <AddInformation />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
