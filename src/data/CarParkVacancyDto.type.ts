export interface CarParkVacancyDto {
  results: Result[];
}

export interface Result {
  park_Id:    string;
  privateCar?: PrivateCar[];
}

export interface PrivateCar {
  vacancy_type: string;
  vacancy:      number;
}
