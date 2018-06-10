import { Injectable } from '@angular/core';
import {Data, VineyardLocation, Settings} from "./data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Data;

  constructor() {
    this.fetch()
  }

  fetch() {
    this.data = JSON.parse(localStorage.getItem("data"));
  }

  save() {
    console.log("save()");
    console.log(this.data);
    console.log(JSON.stringify(this.data));
    localStorage.setItem("data", JSON.stringify(this.data))
  }

  getSettings() {
    if (this.data == null) {
      this.data = new Data();
    }
    if (this.data.settings == null) {
      let s = new Settings();
      return s;
    }

    return this.data.settings;
  }

  setSettings(settings: Settings) {
    if (this.data == null) {
      this.data = new Data();
    }
    this.data.settings = settings;
    console.log(this.data);
    this.save();
  }

  getLocations() {
    if (this.data == null) {
      this.data = new Data();
    }
    if (this.data.locations == null) {
      this.data.locations = Array<VineyardLocation>();
    }
    return this.data.locations;
  }

  setLocations(locations: VineyardLocation[]) {
    this.data.locations = locations;
    // this.messageService.add((new Date()) + "Speichere Weinberg");
    this.save();
  }

  getMessages() {
    return this.data.messages;
  }

  setMessages(messages: string[]) {
    this.data.messages = messages;
  }
}
