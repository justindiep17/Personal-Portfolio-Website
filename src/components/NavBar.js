import { Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    navbar: {
      padding: "3vh 8vw",
    },
    logo: {
      fontFamily: "Roboto",
      fontWeight: "900",
      letterSpacing: "1.5px",
      fontSize: "3rem",
      color: "#0b0b45",
      "&:hover": {
        transform: "translate(0px, -3.5px)",
        cursor: "pointer",
      },
    },
  })
);

function NavBar() {
  const styles = useStyles();
  return (
    <Grid className={styles.navbar}>
      <div className={styles.logo}>JD</div>
    </Grid>
  );
}

export default NavBar;
