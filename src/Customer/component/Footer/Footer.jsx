import { Grid, Box, Typography, Button, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ width: "100vw", bgcolor: "black" }}>
      <Grid
        container
        sx={{
          color: "white",
          py: 4,
          textAlign: "center",
        }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" pb={2}>Company</Typography>
          <Button sx={{ color: "white" }}>About</Button><br />
          <Button sx={{ color: "white" }}>Blog</Button><br />
          <Button sx={{ color: "white" }}>Press</Button><br />
          <Button sx={{ color: "white" }}>Jobs</Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" pb={2}>Support</Typography>
          <Button sx={{ color: "white" }}>Help</Button><br />
          <Button sx={{ color: "white" }}>Contact</Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" pb={2}>Legal</Typography>
          <Button sx={{ color: "white" }}>Privacy</Button><br />
          <Button sx={{ color: "white" }}>Terms</Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" pb={2}>Social</Typography>
          <Button sx={{ color: "white" }}>Twitter</Button><br />
          <Button sx={{ color: "white" }}>LinkedIn</Button>
        </Grid>
        <Grid className="pt-20" item size={{xs:12}}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
          </Typography>

          <Typography variant="body2" component="p" align="center">
            Made with love by Me.
          </Typography>

          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
