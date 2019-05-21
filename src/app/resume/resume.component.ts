import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

	constructor(private modalService: NgbModal) {}

	ngOnInit() {}

	open(content) {
		this.modalService.open(content, {ariaLabelledBy: 'resume-modal-title', windowClass: 'modal-styler', size: 'lg'});
	}

}
