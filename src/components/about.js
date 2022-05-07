import { Grid, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      width: "100vw",
      padding: "3vh 8vw 0vh 8vw",
      background: "white",
    },
    subheading: {
      fontSize: "1.5rem",
      margin: "0",
      fontWeight: "500",
      marginBottom: "1rem",
    },
    aboutText: {
      fontSize: "1.1rem",
      fontWeight: "400",
      lineHeight: "2.2rem",
    },
    textSection: {
      width: "42vw",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: "4vh",
      },
    },
    image: {
      width: "28vw",
      minHeight: "32vw",
      aspectRatio: "1/1.2",
      objectFit: "cover",
      borderRadius: "10px",
      [theme.breakpoints.down("md")]: {
        width: "50vw",
      },
    },
    btn: {
      width: "48.75%",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.1rem",
      border: "none",
      fontFamily: "Roboto",
      fontWeight: "500",
      borderRadius: "5px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    linkedinBtn: {
      background: "#0458b8",
      color: "white",
      marginRight: "2.5%",
      "&:hover": {
        background: "#004799",
      },
    },
    githubBtn: {
      background: "white",
      border: "2px solid black",
      "&:hover": {
        background: "#f2f2f2",
      },
    },
    sectionContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse !important",
        justifyContent: "center",
      },
    },
  })
);

function About() {
  const styles = useStyles();

  return (
    <Grid
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
      className={styles.section}
    >
      <Grid container className={styles.sectionContent}>
        <div className={styles.textSection}>
          <p className={styles.subheading}>Hey there, I'm Justin Diep! 👋</p>
          <p className={styles.aboutText}>
            I'm a second-year Computer Science student at the University of
            Waterloo. I have a passion for full stack web development and I am
            currently seeking internship opportunities for Fall 2022.
          </p>
          <p className={styles.subheading}>When not working, </p>
          <p className={styles.aboutText}>
            I can often be found going on lengthy outdoor runs, composing new
            music on the piano, or indulging in yet another Netflix sitcom.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <button className={`${styles.btn} ${styles.linkedinBtn}`}>
              <LinkedInIcon sx={{ marginRight: "6px" }} /> LinkedIn
            </button>
            <button className={`${styles.btn} ${styles.githubBtn}`}>
              <GitHubIcon sx={{ marginRight: "6px" }} /> GitHub
            </button>
          </div>
        </div>
        <img
          src={
            "https://res.cloudinary.com/dtjedv3hm/image/upload/v1651360059/justin2_ink7wv.webp"
          }
          className={styles.image}
        />
      </Grid>
    </Grid>
  );
}

export default About;
