import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages: string[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.messages;
  }

}
