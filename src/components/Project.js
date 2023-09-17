import { Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      minHeight: "100vh",
      width: "100vw",
      padding: "3vh 0vw",
      background: "white",
      padding: "6vh 8vw 6vh 8vw",
      [theme.breakpoints.down("sm")]: {
        padding: "0 2vw",
      },
    },
    sectionHeading: {
      fontSize: "1.65rem",
      fontWeight: "700",
      marginBottom: "18px",
      padding: "2px 10px",
    },
  })
);

function Projects() {
  const styles = useStyles();
  const projects = [
    {
      title: "StudyBuddy",
      description:
        "Web application that allows students to create, review, or share personalised and digital study decks.",
      imgLink:
        "https://res.cloudinary.com/dtjedv3hm/image/upload/v1651360513/studybuddy.png",
      githubLink: "https://github.com/justindiep17/study-buddy-v1",
      techs: ["React", "Firebase", "JavaScript"],
      projectLink: "https://study-buddy-v1.herokuapp.com/",
    },
    {
      title: "IsItBusy?",
      description:
        "Web application that checks the busyness of gorcery stores in a location based on crowd sourced data.",
      imgLink:
        "https://res.cloudinary.com/dtjedv3hm/image/upload/v1651544700/isitbusy.png",
      githubLink: "https://github.com/justindiep17/IsItBusy",
      techs: ["MongoDB", "Flask", "Python"],
    },
    {
      title: "The Hearth",
      description:
        "Blog website that allows users to read, write, and publish blog posts about the digital card game Hearthstone.",
      imgLink:
        "https://res.cloudinary.com/dtjedv3hm/image/upload/v1651545799/the_hearth_uxvi09.png",
      githubLink: "https://github.com/justindiep17/TheHearth",
      techs: ["Python", "Bootstrap", "PostgreSQL", "Flask"],
    },
  ];
  return (
    <Grid
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
      className={styles.section}
    >
      <Grid
        container
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: "0vh 0vw" }}
      >
        <p className={styles.sectionHeading}>Things I've created 🛠️</p>
        <ProjectCard {...projects[0]} />
        <ProjectCard {...projects[2]} />
        <ProjectCard {...projects[1]} />
      </Grid>
    </Grid>
  );
}

export default Projects;
