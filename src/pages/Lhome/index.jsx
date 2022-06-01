import { Grid, makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Lhome() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            Home page
                  </Typography>
                 
         
                  <iframe src="https://archive.org/embed/msdos_Ms._Pac-Man_1983" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Lhome;
