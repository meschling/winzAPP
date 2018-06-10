import {Component, Input, OnInit} from '@angular/core';
import {Dung, DUNG, NitrogenQuery, VineyardLocation} from "../data";
import {VineyardService} from "../vineyard.service";
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrls: ['./calculation-form.component.css']
})
export class CalculationFormComponent implements OnInit {

  @Input() location: VineyardLocation;
  @Input() cnq: NitrogenQuery;
  @Input() earnings: boolean;
  @Input() openAttitude1: boolean;
  @Input() openAttitude2: boolean;
  @Input() cover1: boolean;
  @Input() cover2: boolean;

  @Input() duenger = DUNG;

  @Input() duengerAktuell: Dung[] = [];
  @Input() duengerJahr2: Dung[] = [];
  @Input() duengerJahr3: Dung[] = [];
  @Input() duengerJahr4: Dung[] = [];

  @Input() selectDuengerKompostAkuell: Dung;
  @Input() selectDuengerSonstigesAkuell: Dung;
  @Input() selectDuengerReststoffeAkuell: Dung;
  @Input() selectDuengerFestmistAkuell: Dung;

  @Input() selectDuengerKompostJahr2: Dung;
  @Input() selectDuengerSonstigesJahr2: Dung;
  @Input() selectDuengerReststoffeJahr2: Dung;
  @Input() selectDuengerFestmistJahr2: Dung;

  @Input() selectDuengerKompostJahr3: Dung;
  @Input() selectDuengerSonstigesJahr3: Dung;
  @Input() selectDuengerReststoffeJahr3: Dung;
  @Input() selectDuengerFestmistJahr3: Dung;

  @Input() selectDuengerKompostJahr4: Dung;
  @Input() selectDuengerSonstigesJahr4: Dung;
  @Input() selectDuengerReststoffeJahr4: Dung;
  @Input() selectDuengerFestmistJahr4: Dung;

  constructor(private vineyardService: VineyardService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.location = this.vineyardService.getVineyardlocation();
    if (this.location == null) {
      this.router.navigate(['/vineyard/dashboard']);
    } else {
      this.cnq = this.findMaxNitrogenQuery();
      this.openAttitude1 = (this.cnq.addsOpenAttitude1 == -10);
      this.openAttitude2 = (this.cnq.addsOpenAttitude2 == -10);
      this.cover1 = (this.cnq.addsCover1 == -10);
      this.cover2 = (this.cnq.addsCover2 == -10);
      this.earnings = (this.cnq.addsEarning == 10);
      if (this.cnq.dungCurrentYear == null) {
        this.cnq.dungCurrentYear = this.duengerAktuell;
      } else {
        this.duengerAktuell = this.cnq.dungCurrentYear;
      }

      if (this.cnq.dungYear2 == null) {
        this.cnq.dungYear2 = this.duengerJahr2;
      } else {
        this.duengerJahr2 = this.cnq.dungYear2;
      }

      if (this.cnq.dungYear3 == null) {
        this.cnq.dungYear3 = this.duengerJahr3;
      } else {
        this.duengerJahr3 = this.cnq.dungYear3;
      }

      if (this.cnq.dungYear4 == null) {
        this.cnq.dungYear4 = this.duengerJahr4;
      } else {
        this.duengerJahr4 = this.cnq.dungYear4;
      }
    }
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

  setGrowth(growth: number) {
    this.cnq.addsGrowth = growth;
  }

  save() {
    this.dataService.save();
    this.router.navigate(['/vineyard/details']);
  }

  cancel() {
    this.router.navigate(['/vineyard/details']);
  }

  addEarnings(earnings: number) {
    this.cnq.addsEarning = earnings;
  }

  setNotLegum1(notLegum1: number) {
    this.cnq.addsNotLegum1 = notLegum1;
  }

  setLegum1(legum1: number) {
    this.cnq.addsLegum1 = legum1;
  }

  setOpenAttitude1(openAttitude1: number) {
    this.cnq.addsOpenAttitude1 = openAttitude1;
    this.openAttitude1 = (openAttitude1 == -10);
  }

  setCover1(cover1: number) {
    this.cnq.addsCover1 = cover1;
    this.cover1 = (cover1 == -10);
  }

  setCopyAlley() {
    this.cnq.addsCover2 = this.cnq.addsCover1;
    this.cnq.addsOpenAttitude2 = this.cnq.addsOpenAttitude1;
    this.cnq.addsLegum2 = this.cnq.addsLegum1;
    this.cnq.addsNotLegum2 = this.cnq.addsNotLegum1;
  }

  setNotLegum2(notLegum2: number) {
    this.cnq.addsNotLegum2 = notLegum2;
  }

  setLegum2(legum2: number) {
    this.cnq.addsLegum2 = legum2;
  }

  setOpenAttitude2(openAttitude2: number) {
    this.cnq.addsOpenAttitude2 = openAttitude2;
    this.openAttitude2 = (openAttitude2 == -10);
  }

  setCover2(cover2: number) {
    this.cnq.addsCover2 = cover2;
    this.cover2 = (cover2 == -10);
  }

  addKompostAkuell() {
    this.duengerAktuell.push(this.selectDuengerKompostAkuell);
  }

  remove(list: Dung[], element: Dung) {
    list.splice(list.indexOf(element), 1);
  }

  addFestmistAkuell() {
    this.duengerAktuell.push(this.selectDuengerFestmistAkuell);
  }

  addSonstigesAkuell() {
    this.duengerAktuell.push(this.selectDuengerSonstigesAkuell);
  }

  addReststoffeAkuell() {
    this.duengerAktuell.push(this.selectDuengerReststoffeAkuell);
  }

  addKompostJahr2() {
    this.duengerJahr2.push(this.selectDuengerKompostJahr2);
  }

  addFestmistJahr2() {
    this.duengerJahr2.push(this.selectDuengerFestmistJahr2);
  }

  addSonstigesJahr2() {
    this.duengerJahr2.push(this.selectDuengerSonstigesJahr2);
  }

  addReststoffeJahr2() {
    this.duengerJahr2.push(this.selectDuengerReststoffeJahr2);
  }

  addKompostJahr3() {
    this.duengerJahr3.push(this.selectDuengerKompostJahr3);
  }

  addFestmistJahr3() {
    this.duengerJahr3.push(this.selectDuengerFestmistJahr3);
  }

  addSonstigesJahr3() {
    this.duengerJahr3.push(this.selectDuengerSonstigesJahr3);
  }

  addReststoffeJahr3() {
    this.duengerJahr3.push(this.selectDuengerReststoffeJahr3);
  }

  addKompostJahr4() {
    this.duengerJahr4.push(this.selectDuengerKompostJahr4);
  }

  addFestmistJahr4() {
    this.duengerJahr4.push(this.selectDuengerFestmistJahr4);
  }

  addSonstigesJahr4() {
    this.duengerJahr4.push(this.selectDuengerSonstigesJahr4);
  }

  addReststoffeJahr4() {
    this.duengerJahr4.push(this.selectDuengerReststoffeJahr4);
  }

}
