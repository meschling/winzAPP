import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Belastung', cols: 2, rows: 1 },
    { title: 'Belastung', cols: 3, rows: 3 },
    { title: 'Belastung', cols: 1, rows: 2 }
  ];
}
