import { Grid, IconButton } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

const useStyles = makeStyles((theme) =>
  createStyles({
    projectCard: {
      display: "flex",
      flexDirection: "row",
      border: "1px solid #a1a2a6",
      borderRadius: "10px",
      boxSizing: "border-box",
      width: "790px !important",
      height: "247px !important",
      margin: "10px 0px",
      "&:hover": {
        transform: "translate(0px, -7.5px)",
      },
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        width: "395px !important",
        height: "514px !important",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        width: "345.875px !important",
        height: "454.05px !important",
      },
    },
    projectImg: {
      padding: "0px",
    },
    img: {
      width: "50%",
      height: "100%",
      borderRadius: "10px 0px 0px 10px",
      objectFit: "cover",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "50%",
        borderRadius: "10px 10px 0px 0px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "212.025px",
      },
    },
    projectText: {
      padding: "20px 5%",
      width: "50%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        height: "252.025px",
      },
    },
    projectTitle: {
      fontSize: "1.5rem",
      margin: "0",
      height: "1.5rem",
      marginBottom: "12px",
      fontWeight: "500",
    },
    techText: {
      fontSize: "1.05rem",
      fontWeight: 400,
      margin: "0",
      background: "rgba(4, 88, 184, 0.55)",
      color: "black",
      borderRadius: "5px",
      textAlign: "center",
      margin: "0px 4px",
      padding: "1px 4px",
      fontWeight: "300",
    },
    techTextRow: {
      margin: "8px 0px",
    },
    description: {
      marginTop: "8px",
      marginBottom: "16px",
      fontSize: "1.05rem",
      lineHeight: "1.25rem",
      fontWeight: "400",
    },
    btn: {
      display: "flex",
      justifyContent: "flex-start",
      "& svg": {
        fontSize: "1.85rem",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  })
);

function ProjectCard({
  title,
  techs,
  imgLink,
  description,
  githubLink,
  projectLink,
}) {
  const styles = useStyles();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={styles.projectCard}>
      <img className={styles.img} src={imgLink} />
      <Grid
        item
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        className={styles.projectText}
      >
        <h3 className={styles.projectTitle}>{title}</h3>
        <Grid display="flex" flexDirection="row" className={styles.techTextRow}>
          {techs.map((tech, i) => {
            if (i === 0) {
              return (
                <p className={styles.techText} style={{ marginLeft: "0px" }}>
                  {tech}
                </p>
              );
            } else if (i === techs.length - 1) {
              return <p className={styles.techText}>{tech}</p>;
            } else {
              return <p className={styles.techText}>{tech}</p>;
            }
          })}
        </Grid>
        <p className={styles.description}>{description}</p>
        <Grid display="flex" flexDirection="row">
          <div className={styles.btn} style={{ marginRight: "12px" }}>
            <GitHubIcon
              onClick={() => {
                openInNewTab(githubLink);
              }}
            />
          </div>
          {projectLink && (
            <div className={styles.btn}>
              <LinkIcon
                onClick={() => {
                  openInNewTab(projectLink);
                }}
              />
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectCard;
