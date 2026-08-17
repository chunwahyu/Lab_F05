import {FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";

interface Props {
  districtFilter: string;
  handleDistrictFilterChange: (newDistrict: string) => void;
  vehicleTypeFilter: string;
  handleVehicleTypeFilterChange: (newVehicleType: string) => void;
}

export default function FilterForm({
                                      districtFilter,
                                      handleDistrictFilterChange,
                                      vehicleTypeFilter,
                                      handleVehicleTypeFilterChange
                                   }: Props) {
  return (
      <Paper
        component="form"
        sx={{
          p: 3,
          my: 3
        }}
      >
        <TextField
            sx={{mb: 3}}
            label="District"
            variant="outlined"
            fullWidth
            value={districtFilter}
            onChange={(event) => {
              handleDistrictFilterChange(event.target.value)
            }}
        />
        <FormControl fullWidth>
          <InputLabel>Vehicle Type</InputLabel>
          <Select
              value={vehicleTypeFilter}
              label="Vehicle Type"
              onChange={(event) => {
                handleVehicleTypeFilterChange(event.target.value);
              }}
          >
            <MenuItem value="privateCar">Private Car</MenuItem>
            <MenuItem value="LGV">LGV</MenuItem>
            <MenuItem value="HGV">HGV</MenuItem>
            <MenuItem value="coach">Coach</MenuItem>
            <MenuItem value="motorCycle">Motor Cycle</MenuItem>
          </Select>
        </FormControl>

      </Paper>
  )
}