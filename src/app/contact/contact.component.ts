import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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

  //ngModels - direct relation to inputs
  emailField: string;
  subjectField: string;
  messageField: string;

  constructor(private modal: NgbModal, private funcs: FuncsService, private auth: AuthService) {
    funcs.setDisplayFooter(true);
    funcs.setDisplayHeaderPadding(true);
  }

  ngOnInit() {}

  showErrModal(errmodal) {
    this.modal.open(errmodal, {ariaLabelledBy: 'home-modal-err'});
  }

  showSuccessModal(successmodal) {
    this.modal.open(successmodal, {ariaLabelledBy: 'home-modal-success'});
  }  

  sendMessage() {
  	let data: ContactData = {subject: this.subjectField, message: this.messageField, email: this.emailField};
    if(this.subjectField != "" && this.messageField != "" && this.emailField != "") {
      this.auth.addContact(data).then((res) => {
        //add contact form sent success modal
        this.subjectField = '';
        this.messageField = '';
        this.emailField = '';
      });
    } else {
      //add error modal open code
    }
    
  }

}
