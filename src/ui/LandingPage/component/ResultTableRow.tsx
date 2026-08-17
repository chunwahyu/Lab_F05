import {Button, TableCell, TableRow} from "@mui/material";
import type {Result, VehicleType} from "../../../data/CarParkInfo.type.ts";
import {useEffect, useState} from "react";
import type {CarParkVacancyDto} from "../../../data/CarParkVacancyDto.type.ts";
import {getCarParkVacancyById} from "../../../api/GovOpenDataApi.ts";

interface Props {
  result: Result;
  vehicleTypeFilter: string;
}

export default function ResultTableRow({result, vehicleTypeFilter}: Props) {

  const[vacancyDto, setVacancyDto] = useState<CarParkVacancyDto | undefined>(undefined);

  useEffect(() => {
    const fetchVacancyDto = async () => {
      const responseData = await getCarParkVacancyById(result.park_Id);
      setVacancyDto(responseData);
    }
    void fetchVacancyDto();
  }, [result]);

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

  const renderSpace = () => {
    return result[vehicleTypeFilter as VehicleType] ? result[vehicleTypeFilter as VehicleType]?.space : "NA";
  }

  const renderVacancy = () => {
    if(vacancyDto) {
      if(vacancyDto.results[0].privateCar) {
        return vacancyDto.results[0].privateCar[0].vacancy;
      }
    }


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
        <TableCell>{renderVacancy()}/{renderSpace()}</TableCell>
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