import { Injectable } from '@angular/core';
import {NitrogenQuery, VineyardLocation} from './data';

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

  findMaxNitrogenQuery(l: VineyardLocation) {
    let location: VineyardLocation;
    if (l != null) {
      location = l;
    } else {
      location = this.location;
    }

    if (location.histroy == null) {
      location.histroy = [];
    }
    if (location.histroy.length == 0) {
      const n = new NitrogenQuery();
      location.histroy.push(n);
      return n;
    }
    let n = location.histroy[0];
    for (let i = 1; i < location.histroy.length; i++) {
      if (n.date < location.histroy[i].date) {
        n = location.histroy[i];
      }
    }
    return n;
  }


  getMaxN(l: VineyardLocation) {
    let location: VineyardLocation;
    if (l != null) {
      location = l;
    } else {
      location = this.location;
    }
    const n = this.findMaxNitrogenQuery(l);
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

      return result;
    }
    return 0;
  }

  getOrganicReduce(l: VineyardLocation) {
    let lastDung = 0;
    const n = this.findMaxNitrogenQuery(l);
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
    return lastDung;
  }

  getInputN() {
    return (this.getMaxN(this.location) - this.getOrganicReduce(this.location));
  }
}
