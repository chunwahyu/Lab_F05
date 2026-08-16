import {Button, TableCell, TableRow} from "@mui/material";

export default function ResultTableRow() {
  return (
      <TableRow>
        <TableCell>
          <img src="https://sps-opendata.pilotsmartke.gov.hk/rest/getRendition/fs-1%3A859280094011967658179347734190846999967397591797.jpg/square.png" />
        </TableCell>
        <TableCell>Manhattan Place Carpark</TableCell>
        <TableCell>Manhattan Place, 23 Wang Tai Road, Kowloon Bay, KLN</TableCell>
        <TableCell>100</TableCell>
        <TableCell><Button variant="contained">Map</Button></TableCell>
      </TableRow>
  )
}