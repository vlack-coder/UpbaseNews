import React, {useContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/scss/base.scss";
import { history } from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";
// import { login, logout } from "./actions/auth";
import AuthContext from "./context/auth/authContext";




let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};

const Main = (props) => {
  const authContext = useContext(AuthContext);

  const { startLogin, startLogout, login, logout } = authContext;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid)(login(user.uid));
      // (startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/home");
      }
      // });
    } else {
      console.log("yes")(logout());
      renderApp();
      history.push("/");
    }
  });
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
