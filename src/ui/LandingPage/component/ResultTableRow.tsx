import {Button, TableCell, TableRow} from "@mui/material";
import type {Result, VehicleType} from "../../../data/CarParkInfo.type.ts";

interface Props {
  result: Result;
  vehicleTypeFilter: string;
}

export default function ResultTableRow({result, vehicleTypeFilter}: Props) {
  const renderCarParkImage = () => {
    if(!result.renditionUrls) {
      return "https://nftcalendar.io/storage/uploads/2022/02/21/image-not-found_0221202211372462137974b6c1a.png"
    }

    if(result.renditionUrls.square) {
      return result.renditionUrls.square;
    }

    if(result.renditionUrls.carpark_photo) {
      return result.renditionUrls.carpark_photo;
    }

    return "https://nftcalendar.io/storage/uploads/2022/02/21/image-not-found_0221202211372462137974b6c1a.png";
  }

  return (
      <TableRow>
        <TableCell>
          <img
              src={renderCarParkImage()}
              width={120}
          />
        </TableCell>
        <TableCell>{result.name}</TableCell>
        <TableCell>{result.displayAddress}</TableCell>
        <TableCell>{result[vehicleTypeFilter as VehicleType] ? result[vehicleTypeFilter as VehicleType]?.space : "NA"}</TableCell>
        <TableCell>
          <Button variant="contained"
                  onClick={()=>{
                    window.open(`http://maps.google.com/maps?q=${result.latitude},${result.longitude}`,`_blank`)?.focus();
                  }}
          >
            Map
          </Button>
        </TableCell>
      </TableRow>
  )
}