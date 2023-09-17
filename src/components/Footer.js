import { Grid } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <Grid
      xs={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        marginBottom: "3vh",
        fontFamily: "Roboto",
        fontSize: "0.9rem",
        marginTop: "2vh",
      }}
    >
      <CopyrightIcon fontSize="small" sx={{ marginRight: "4px" }} />
      Justin Diep, 2023
    </Grid>
  );
}

export default Footer;
