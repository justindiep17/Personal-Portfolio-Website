import { Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      height: "100vh",
      minHeight: "100vh",
      maxHeight: "100vh",
      width: "100vw",
      padding: "10vh 7.5vw",
      background: "#f7e6cb",
    },
    heading: {
      className: "Roboto",
      fontSize: "4.25rem",
      fontWeight: "700",
      marginBottom: "2vh",
    },
    subheading: {
      fontSize: "2.5rem",
      margin: "0",
      height: "4rem ",
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
    },
  })
);

function Title() {
  const styles = useStyles();

  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      className={styles.section}
    >
      <h1 className={styles.heading}>Nice to meet you, I'm Justin!</h1>
      <h2 className={styles.subheading}>
        <span style={{ height: "4rem", lineHeight: "3rem" }}>I'm&nbsp;</span>
        <Typewriter
          options={{
            strings: [
              "a software engineer 💻.",
              "passionate about piano 🎹.",
              "a long-distance runner 👟.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </Grid>
  );
}

export default Title;
