import { Component } from '@angular/core';
import {DataService} from "../data.service";
import {VineyardService} from "../vineyard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private dataService: DataService, private vineyardService: VineyardService) { }

  getMaxN() {
    let maxN = 0;
    for (let i = 0; i < this.dataService.getLocations().length; i++) {
      maxN += this.vineyardService.getMaxN(this.dataService.getLocations()[i]);
    }
    return maxN;
  }

  getOrganicReduce() {
    let organicReduce = 0;
    for (let i = 0; i < this.dataService.getLocations().length; i++) {
      organicReduce += this.vineyardService.getOrganicReduce(this.dataService.getLocations()[i]);
    }
    return organicReduce;
  }

  getInputN() {
    let inputN = 0;
    for (let i = 0; i < this.dataService.getLocations().length; i++) {
      this.vineyardService.setVineyardLocation(this.dataService.getLocations()[i]);
      inputN += this.vineyardService.getInputN();
    }
    return inputN;
  }

}
