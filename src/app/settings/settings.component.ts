import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Settings} from '../data';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input() settings: Settings;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.settings = this.dataService.getSettings();
  }

  saveSettings() {
    this.dataService.setSettings(this.settings);
  }

}
