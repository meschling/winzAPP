import { Injectable } from '@angular/core';
import {VineyardLocation} from "./data";

@Injectable({
  providedIn: 'root'
})
export class VineyardService {

  location: VineyardLocation;

  constructor() { }

  getVineyardlocation() {
    return this.location;
  }

  setVineyardLocation(location: VineyardLocation) {
    this.location = location;
  }

}
