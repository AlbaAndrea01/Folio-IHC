
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    height: "50px",
    position: "fixed",
    bottom: "0",
    overflow: "hidden",
    padding: "1em 0 ",
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Container maxWidth="lg">

        <Grid
          item
          container
          component={"a"}
          rel="noreferrer noopener"
          justify="center"
        >
          <Typography className={classes.copylight}>
            Sebastian Caballero - Dalila Castelnovo - Alba Esquivel
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
