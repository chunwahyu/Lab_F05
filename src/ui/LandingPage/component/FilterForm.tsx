import {FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";

export default function FilterForm() {
  return (
      <Paper
        component="form"
        sx={{
          p: 3,
          my: 3
        }}
      >
        <TextField sx={{mb: 3}} label="District" variant="outlined" fullWidth />

        <FormControl fullWidth>
          <InputLabel>Vehicle Type</InputLabel>
          <Select
              value="privateCar"
              label="Vehicle Type"
              //onChange={handleChange}
          >
            <MenuItem value="privateCar">Private Car</MenuItem>
            <MenuItem value="LGV">LGV</MenuItem>
            <MenuItem value="HGV">HGV</MenuItem>
            <MenuItem value="coach">Coach</MenuItem>
            <MenuItem value="motorcycle">Motor Cycle</MenuItem>
          </Select>
        </FormControl>

      </Paper>
  )
}