import { Router, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";
import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Router>
        
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/registration"
        element={
            <GuestRoute>
               <Registration />
          </GuestRoute>
        } />
            

      <Route path="/not-found-404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Router>
  ) : (
          
          <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>

     </Container >
  );
}

export default AppRoutes;
