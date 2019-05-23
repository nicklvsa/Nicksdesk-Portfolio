import { Component, OnInit } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private funcs: FuncsService) { 
  	funcs.setDisplayFooter(true);
  }

  ngOnInit() {
  }

}
