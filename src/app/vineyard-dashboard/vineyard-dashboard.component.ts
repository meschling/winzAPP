import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {VineyardLocation} from "../data";
import {Router} from "@angular/router";
import {VineyardService} from "../vineyard.service";

@Component({
  selector: 'app-vineyard-dashboard',
  templateUrl: './vineyard-dashboard.component.html',
  styleUrls: ['./vineyard-dashboard.component.css']
})
export class VineyardDashboardComponent implements OnInit {

  @Input() locations: VineyardLocation[];

  constructor(private vineyardService: VineyardService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.locations = this.dataService.getLocations();
    if (this.locations.length == 0) {
      this.createVineyardLocation();
    }
  }

  createVineyardLocation() {
    this.vineyardService.setVineyardLocation(new VineyardLocation());
    this.router.navigate(['/vineyard/form']);
  }

  selectShow(location: VineyardLocation) {
    this.vineyardService.setVineyardLocation(location);
    this.router.navigate(['/vineyard/details']);
  }

  selectEdit(location: VineyardLocation) {
    this.vineyardService.setVineyardLocation(location);
    this.router.navigate(['/vineyard/form']);
  }
}
