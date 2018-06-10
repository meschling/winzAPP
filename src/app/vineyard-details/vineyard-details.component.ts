import {Component, Input, OnInit} from '@angular/core';
import {VineyardService} from '../vineyard.service';
import {VineyardLocation} from '../data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vineyard-details',
  templateUrl: './vineyard-details.component.html',
  styleUrls: ['./vineyard-details.component.css']
})
export class VineyardDetailsComponent implements OnInit {

  @Input() location: VineyardLocation;

  constructor(private vineyardService: VineyardService, private router: Router) {
  }

  ngOnInit() {
    this.location = this.vineyardService.getVineyardlocation();
    if (this.location == null) {
      this.router.navigate(['/vineyard/dashboard']);
    }
  }

  getMax() {
    return (this.vineyardService.getMaxN(this.vineyardService.getVineyardlocation()));
  }
}
