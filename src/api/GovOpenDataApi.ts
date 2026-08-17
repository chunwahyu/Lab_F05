import axios from "axios";
import type {CarParkInfoDto} from "../data/CarParkInfo.type.ts";


export async function getCarParkInfo() {
  const response = await axios.get<CarParkInfoDto>("https://api.data.gov.hk/v1/carpark-info-vacancy")

  return response.data;
}