import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Ground, Humus, VineyardLocation} from "../data";
import {VineyardService} from "../vineyard.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-vineyard-form',
  templateUrl: './vineyard-form.component.html',
  styleUrls: ['./vineyard-form.component.css']
})
export class VineyardFormComponent implements OnInit {

  @Input() location: VineyardLocation;
  @Input() humus: Humus[];

  constructor(private dataService: DataService, private vineyardService: VineyardService, private router: Router) { }

  ngOnInit() {
    this.location = this.vineyardService.getVineyardlocation();
    if (this.location == null) {
      this.location = new VineyardLocation();
    }
  }

  save() {
    if (this.isNewLocation()) {
      this.dataService.getLocations().push(this.location);
    }
    this.dataService.save();
    this.back();
  }

  next() {
    if (this.isNewLocation()) {
      this.dataService.getLocations().push(this.location);
    }
    this.dataService.save();
    this.location = new VineyardLocation();
    this.vineyardService.setVineyardLocation(this.location);
  }

  cancel() {
    this.back();
  }

  back() {
    this.router.navigate(["/vineyard/dashboard"]);
  }

  delete() {
    this.dataService.getLocations().splice(this.dataService.getLocations().indexOf(this.vineyardService.getVineyardlocation()), 1);
    this.back();
  }

  isNewLocation() {
    return this.dataService.getLocations().indexOf(this.vineyardService.getVineyardlocation()) < 0;
  }

  setGround(ground: number) {
    this.location.ground = ground;
  }

  setHumus(humus: number) {
    this.location.addsHumus = humus;
  }

}
