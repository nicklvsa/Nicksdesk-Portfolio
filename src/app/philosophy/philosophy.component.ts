import { Component, OnInit } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss']
})
export class PhilosophyComponent implements OnInit {

  constructor(private funcs: FuncsService) {
  	funcs.setDisplayHeaderPadding(true);
  	funcs.setDisplayFooter(true);
  }

  ngOnInit() {
  }

}
