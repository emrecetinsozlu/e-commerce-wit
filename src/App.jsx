import { Switch, Route } from "react-router-dom";
import Home from './layout/Home.jsx';
//import './App.css'

function App() {
 

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}/>
      
      </Switch>
    </>
  )
}

export default App
