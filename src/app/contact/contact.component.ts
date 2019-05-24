import { Component, OnInit } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';
import { AuthService } from '../_auth/auth.service';

import { Injectable } from '@angular/core';

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

  emailField: string;
  subjectField: string;
  messageField: string;

  constructor(private funcs: FuncsService, private auth: AuthService) {
    funcs.setDisplayFooter(true);
    funcs.setDisplayHeaderPadding(true);
  }

  ngOnInit() {}

  sendMessage() {
  	let data: ContactData = {subject: this.subjectField, message: this.messageField, email: this.emailField};
    if(this.subjectField != "" && this.messageField != "" && this.emailField != "") {
      this.auth.addContact(data).then(res => {
        console.log(res);
        this.subjectField = '';
        this.messageField = '';
        this.emailField = '';
      });
    } else {
      
    }
    
  }

}
