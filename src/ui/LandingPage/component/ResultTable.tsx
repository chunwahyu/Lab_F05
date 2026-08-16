import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ResultTableRow from "./ResultTableRow.tsx";

export default function ResultTable() {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Total Vacancy</TableCell>
              <TableCell>Google Map</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Array.from({length: 20}).map(() => (
                <ResultTableRow />
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
  )
}