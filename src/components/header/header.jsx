import React from "react";
import "./header.css";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
export const Header = () => {
    const auth = useAuth();
    return (

       
            <div >
                
                    <Toolbar>
                        <Typography variant="h6" >
                            Real App
                        </Typography>
                        <div>
                            <Button color="inherit" component={Link} to="/">
                                Home
                            </Button>
                        </div>
                        


        </div>



    );
}
