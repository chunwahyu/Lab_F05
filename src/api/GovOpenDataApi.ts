import axios from "axios";
import type {CarParkInfoDto} from "../data/CarParkInfo.type.ts";
import type {CarParkVacancyDto} from "../data/CarParkVacancyDto.type.ts";


export async function getCarParkInfo() {
  const response = await axios.get<CarParkInfoDto>("https://api.data.gov.hk/v1/carpark-info-vacancy")

  return response.data;
}

export async function getCarParkVacancyById(id: string) {
  const response = await axios.get<CarParkVacancyDto>(`https://api.data.gov.hk/v1/carpark-info-vacancy?data=vacancy&carparkIds=${id}`);

  return response.data;
}