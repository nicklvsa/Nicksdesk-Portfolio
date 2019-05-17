import { Component, OnInit } from '@angular/core';

import { ContactServiceService } from '../services/contact/contact-service.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ContactData {
	subject: string;
	email: string;
	message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  emailField: string = "";
  subjectField: string = "";
  messageField: string = "";

  //https://angular.io/guide/http
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  sendMessage() {
  	let contactService: ContactServiceService = new ContactServiceService(this.http);
  	let contact: ContactData = {subject: this.subjectField, email: this.emailField, message: this.messageField};
  	contactService.sendContactForm(contact);
  }

}
