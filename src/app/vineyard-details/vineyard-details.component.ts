import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vineyard-details',
  templateUrl: './vineyard-details.component.html',
  styleUrls: ['./vineyard-details.component.css']
})
export class VineyardDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  calculated() {
    return "N/A";
  }
}
