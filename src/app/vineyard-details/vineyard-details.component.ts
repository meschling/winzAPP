import {Component, Input, OnInit} from '@angular/core';
import {VineyardService} from '../vineyard.service';
import {VineyardLocation} from '../data';

@Component({
  selector: 'app-vineyard-details',
  templateUrl: './vineyard-details.component.html',
  styleUrls: ['./vineyard-details.component.css']
})
export class VineyardDetailsComponent implements OnInit {

  @Input() location: VineyardLocation;

  constructor(private vineyardService: VineyardService) {
  }

  ngOnInit() {
    this.location = this.vineyardService.getVineyardlocation();
  }


  calculated() {
    const location = this.vineyardService.getVineyardlocation();
    const n = this.vineyardService.findMaxNitrogenQuery();
    if (n != null) {
      let result = 0;
      if (location.addsHumus) {
        console.log('addsHumus:' + location.addsHumus);
        result += location.addsHumus;
      }
      if (n.addsGrowth) {
        console.log('addsGrowth:' + n.addsGrowth);
        result += n.addsGrowth;
      }
      if (n.addsEarning) {
        console.log('addsEarning:' + n.addsEarning);
        result += n.addsEarning;
      }
      if (n.addsNotLegum1) {
        console.log('addsNotLegum1:' + n.addsNotLegum1);
        result += n.addsNotLegum1;
      }
      if (n.addsLegum1) {
        console.log('addsLegum1:' + n.addsLegum1);
        result += n.addsLegum1;
      }
      if (n.addsOpenAttitude1) {
        console.log('addsOpenAttitude1:' + n.addsOpenAttitude1);
        result += n.addsOpenAttitude1;
      }
      if (n.addsCover1) {
        console.log('addsCover1:' + n.addsCover1);
        result += n.addsCover1;
      }
      if (n.addsNotLegum2) {
        console.log('addsNotLegum2:' + n.addsNotLegum2);
        result += n.addsNotLegum2;
      }
      if (n.addsLegum2) {
        console.log('addsLegum2:' + n.addsLegum2);
        result += n.addsLegum2;
      }
      if (n.addsOpenAttitude2) {
        console.log('addsOpenAttitude2:' + n.addsOpenAttitude2);
        result += n.addsOpenAttitude2;
      }
      if (n.addsCover2) {
        console.log('addsCover2:' + n.addsCover2);
        result += n.addsCover2;
      }
      let max = '';
      if (result > 80) {
        max = '(ist über maximalmenge)';
      }

      let lastDung = 0;

      for (let i = 0; i < n.dungCurrentYear.length; i++) {
        const d = n.dungCurrentYear[i];
        if (d.applicationRate != null) {
          lastDung += d.applicationRate * d.factor * (d.current / 100);
        }
      }
      for (let i = 0; i < n.dungYear2.length; i++) {
        const d = n.dungYear2[i];
        if (d.applicationRate != null) {
          lastDung += d.applicationRate * d.factor * (d.year2 / 100);
        }
      }
      for (let i = 0; i < n.dungYear3.length; i++) {
        const d = n.dungYear3[i];
        if (d.applicationRate != null) {
          lastDung += d.applicationRate * d.factor * (d.year3 / 100);
        }
      }
      for (let i = 0; i < n.dungYear4.length; i++) {
        const d = n.dungYear4[i];
        if (d.applicationRate != null) {
          lastDung += d[i].applicationRate * d[i].factor * (d.year4 / 100);
        }
      }



      return `${result + max} kg N/ha =>
        ${location.area} ha * ${result} kg N/ha = ${location.area * result} =>
        abzüglich organischer Dünger ${lastDung} kg N/ha => ${result - lastDung}`;
    }
    return 'N/A';
  }
}
