import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Settings, VineyardLocation} from '../data';
import {VineyardService} from '../vineyard.service';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-pdf-export-view',
  templateUrl: './pdf-export-view.component.html',
  styleUrls: ['./pdf-export-view.component.css']
})
export class PdfExportViewComponent implements OnInit, AfterViewInit {

  @Input() data: Settings;
  @Input() locations: VineyardLocation[];
  constructor(private dataService: DataService, private vineyardService: VineyardService) { }

  ngOnInit() {
    this.data = this.dataService.getSettings();
    this.locations = this.dataService.getLocations();

  }

  createPdf() {
    const doc = new jsPDF();
    const elementHandler = {
      '#ignorePDF': function (element, renderer) {
        return true;
      }
    };
    const source = window.document.getElementById('pdf-export');
    doc.fromHTML(
      source,
      15,
      15,
      {
        'width': 320, 'elementHandlers': elementHandler
      });

    doc.save('dataurlnewwindow');
  }

  ngAfterViewInit() {
    this.createPdf();
  }

}
