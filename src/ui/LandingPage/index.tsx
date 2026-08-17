import TopNavBar from "../component/TopNavBar.tsx";
import FilterForm from "./component/FilterForm.tsx";
import {Container, Typography} from "@mui/material";
import ResultTable from "./component/ResultTable.tsx";
import {useEffect, useState} from "react";
import type {CarParkInfoDto} from "../../data/CarParkInfo.type.ts";
import {getCarParkInfo} from "../../api/GovOpenDataApi.ts";
import LoadingContainer from "./component/LoadingContainer.tsx";

export default function LandingPage() {

  const [carParkInfoDto, setCarkParkInfoDto] = useState<CarParkInfoDto | undefined>(undefined);

  const [districtFilter, setDistrictFilter] = useState("");
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState("privateCar");

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDto = async () => {
      try {
        const responseData = await getCarParkInfo();
        setCarkParkInfoDto(responseData);
      } catch(error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    void fetchDto();
  }, []);

  const handleDistrictFilterChange = (newDistrict: string) => {
    setDistrictFilter(newDistrict);
  }

  const handleVehicleTypeFilterChange = (newVehicleType: string)=> {
    setVehicleTypeFilter(newVehicleType);
  }

  return (
      <>
        <TopNavBar />
        <Container>
          {
            isLoading &&
              <LoadingContainer />
          }

          {
            isError &&
              <Typography variant="h1">404 ERROR!!!</Typography>
          }

          {
            !isLoading && !isError && carParkInfoDto &&
              <>
                  <FilterForm
                      districtFilter={districtFilter}
                      handleDistrictFilterChange={handleDistrictFilterChange}
                      vehicleTypeFilter={vehicleTypeFilter}
                      handleVehicleTypeFilterChange={handleVehicleTypeFilterChange}
                  />

                  <ResultTable
                      carParkInfoDto={carParkInfoDto}
                      districtFilter={districtFilter}
                      vehicleTypeFilter={vehicleTypeFilter}
                  />
              </>
          }
        </Container>
      </>
  )
}