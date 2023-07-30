import "./App.css";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AddminMovieForm from "./components/AdminEvent/AdminEvent";
import EventDisplay from "./components/EventDisplay/EventDisplay";
import store from "../src/store";
import { Provider } from "react-redux";
import { useState } from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import EventView from "./components/EventDisplay/EventView";

function App() {

  const [editId,setEditId]=useState(null);
  const editEventHandler=(id)=>{
    setEditId(id)
  }

  return (
    <Router>
    <Provider store={store}>
      <div className="App">
      <Header />
      <Switch>
        {/* <Route path="/Events" component={EventDisplay} /> */}
        <Route path="/Events" render={() => <EventDisplay onEditEvent={editEventHandler} />} />
        <Route path="/Register" component={Register} />
        <Route exact path="/" component={Login} />
        {/* <Route path="/Admin" component={AddminMovieForm} /> */}
        <Route path="/ViewEvent/:id" component={EventView}></Route>
        <Route path="/Admin" render={() => <AddminMovieForm eventId={editId} />} />
      </Switch>
    </div>
    </Provider>
    </Router>
  );
}

export default App;
