import {Box, CircularProgress} from "@mui/material";

export default function LoadingContainer() {
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh"
        }}
      >
        <CircularProgress aria-label="Loading..." />
      </Box>
  )
}
