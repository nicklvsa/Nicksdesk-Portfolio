import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  /*encapsulation: ViewEncapsulation.Emulated*/
})
export class HomeComponent implements OnInit {

  constructor(public funcs: FuncsService) { 
	funcs.setDisplayFooter(false);
  	funcs.setDisplayHeaderPadding(false);
  }

  ngOnInit() {}

}
