import { Injectable } from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor(private dataService: DataService) {
    this.messages = this.dataService.getMessages();
  }

  add(message: string) {
    this.messages.push(message);
    this.removeOldestMessage();
    this.dataService.setMessages(this.messages);
  }

  removeOldestMessage() {
    for (let i = this.messages.length; i > 30; i--) {
      this.messages.splice(0,1);
    }
  }
}
