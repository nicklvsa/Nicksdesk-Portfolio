import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent implements OnInit {

	constructor(private modalService: NgbModal, private funcs: FuncsService) {
		console.log(funcs.isMobile() ? "mobile" : "desktop");
		funcs.setDisplayFooter(true);
	}

	ngOnInit() {}

	open(content) {
		this.modalService.open(content, {ariaLabelledBy: 'resume-modal-title', windowClass: 'modal-anim', size: 'lg'});
	}

}
