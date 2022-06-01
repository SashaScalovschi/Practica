import React from "react";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Routes from "../../routes/Routes";
import useAuth from "../../hooks/useAuth";



export const Header = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const onLogOut = () => {
        auth.logOut();
        navigate("/login");
    };
  return (
    

      <div className="wrapper">
                 <div >
                  <AppBar position="static">
                      <Toolbar>
                          <Typography variant="h6" >
                              Real App
                          </Typography>

                          {auth.isLoaded &&
                              (auth.user ? (
                                  <>
                                      <div >
                                          <Button color="inherit" component={Link} to="/Lhome">
                                              Home
                                          </Button> </div>
                                          <Button color="inherit" component={Link} to="/game-page">
                                          Game
                                      </Button>

                                      <Button color="inherit" component={Link} to="/profile">
                                          {auth.user.firstName} {auth.user.lastName}
                                      </Button>
                              <Button color="inherit" onClick={onLogOut}>
                                          Log out
                                      </Button>

                                  </>
                              ) : (
                                  <>
                                      <div>
                                          <Button color="inherit" component={Link} to="/Home">
                                              Home
                                          </Button>
                                      </div>
                                      <Button color="inherit" component={Link} to="/game-page">
                                          Game
                                      </Button>

                                      <Button color="inherit" component={Link} to="/login">
                                          Login
                                      </Button>
                                      <Button color="inherit" component={Link} to="/registration">
                                          Registration
                                      </Button>

                                  </>
                              ))}
                      </Toolbar>
                  </AppBar>

              <Routes />
              </div>
              

        </div>
         
     
    
  );
}
