import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: string[] = [];

  add(messsage: string) {
    this.messages.push(messsage);
  }

  clear() {
    this.messages = [];
  }

  constructor() {}
}
