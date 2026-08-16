import {AppBar, Toolbar, Typography} from "@mui/material";

export default function TopNavBar() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Car Park Vacancy
          </Typography>
        </Toolbar>
      </AppBar>
  )
}