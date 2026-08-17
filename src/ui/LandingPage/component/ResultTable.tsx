import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ResultTableRow from "./ResultTableRow.tsx";
import type {CarParkInfoDto} from "../../../data/CarParkInfo.type.ts";

interface Props {
  carParkInfoDto: CarParkInfoDto;
  districtFilter: string;
  vehicleTypeFilter: string;
}

export default function ResultTable({
                                      carParkInfoDto,
                                      districtFilter,
                                      vehicleTypeFilter
                                    }: Props) {

  const renderVehicleTypeHeader = () => {
    if(vehicleTypeFilter === "privateCar") {
      return "Total Vacancy"
    } else if(vehicleTypeFilter === "LGV") {
      return "LGV Vacancy"
    } else if(vehicleTypeFilter === "HGV") {
      return "HGV Vacancy"
    } else if(vehicleTypeFilter === "coach") {
      return "Coach Vacancy"
    } else {
      return "Motor Cycle Vacancy"
    }
  }

  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>{renderVehicleTypeHeader()}</TableCell>
              <TableCell>Google Map</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              carParkInfoDto.results
                  .filter((result) => (
                    result.district.toLowerCase().includes(districtFilter.toLowerCase())
                  ))
                  .map((result) => (
                    <ResultTableRow
                    key={result.park_Id}
                    result={result}
                    vehicleTypeFilter={vehicleTypeFilter}
                  />
                ))
            }
          </TableBody>
        </Table>
      </TableContainer>
  )
}