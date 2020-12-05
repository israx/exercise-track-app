import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Exercises from "./pages/exercises";
import AddExercises from "./pages/addExercises";
import Users from "./pages/users";
import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import EditExercise from "./pages/edit";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Typography />
      <Nav />
      <Switch>
        <Route exact path="/exercises">
          <Exercises />
        </Route>
        <Route path="/exercises/add">
          <AddExercises />
        </Route>
        <Route path="/exercise/update/:id">
          <EditExercise />
        </Route>

        <Route exact path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
