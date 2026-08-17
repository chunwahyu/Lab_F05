export interface CarParkInfoDto {
  results: Result[];
}

export interface Result {
  park_Id:         string;
  name:            string;
  displayAddress:  string;
  district:        string;
  latitude:        number;
  longitude:       number;
  privateCar?:     PrivateCar;
  LGV?:            Lgv;
  HGV?:            Hgv;
  coach?:          Coach;
  motorCycle?:     MotorCycle;
  renditionUrls?:  RenditionUrls;
}

export interface Hgv {
  space:           number;
}

export interface Lgv {
  space:           number;
}

export interface Coach {
  space:    number;
}

export interface MotorCycle {
  space:           number;
}

export interface PrivateCar {
  space:           number;
}

export interface RenditionUrls {
  square?:        string;
  thumbnail?:     string;
  banner?:        string;
  carpark_photo?: string;
}

export type VehicleType = "privateCar" | "LGV" | "HGV" | "coach" | "motorCycle"