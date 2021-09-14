import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./util/CustomRoute";
import Chat from "./Chat";
import Playground from "./Playground";
import Cats from "./Cats";
import Home from "./Home";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/compat";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
}));

export const firebaseConfig = {
  apiKey: "AIzaSyANtBaeDjrPPzY6TIrjq8CMvSB3Az5agL0",
  authDomain: "gb-react-project-350cd.firebaseapp.com",
  projectId: "gb-react-project-350cd",
  databaseURL:
    "https://gb-react-project-350cd-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "gb-react-project-350cd.appspot.com",
  messagingSenderId: "524675586930",
  appId: "1:524675586930:web:571c4afa11c8f74e439beb",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.mainWrapper}>
        {/* <AppBar /> */}

        <Switch>
          <CustomRoute secured path="/chat/:id">
            <Chat />
          </CustomRoute>

          <CustomRoute path="/playground" secured withAppBar={true}>
            <Playground myProps={1} />
          </CustomRoute>

          <Route path="/cats" secured withAppBar={true}>
            <Cats />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/" withAppBar={false}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
