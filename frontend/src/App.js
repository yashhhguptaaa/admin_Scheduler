import './App.css';
import Calender from './components/Calender/Calender';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from "axios";
import AddInformation from './components/AddInformation/AddInformation';

axios.defaults.withCredentials = true;
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
