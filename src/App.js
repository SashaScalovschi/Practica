import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import useAuth from "./hooks/useAuth";
import { Header } from "./components/header";


function App() {
      return (
        <Header />
    );
}

export default App;
