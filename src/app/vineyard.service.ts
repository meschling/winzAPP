import { Injectable } from '@angular/core';
import {NitrogenQuery, VineyardLocation} from "./data";

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

  findMaxNitrogenQuery() {
    if (this.location.histroy == null) {
      this.location.histroy = [];
    }
    if (this.location.histroy.length == 0) {
      let n = new NitrogenQuery();
      this.location.histroy.push(n);
      return n;
    }
    let n = this.location.histroy[0];
    for (let i = 1; i < this.location.histroy.length; i++) {
      if (n.date < this.location.histroy[i].date) {
        n = this.location.histroy[i];
      }
    }
    return n;
  }

}
