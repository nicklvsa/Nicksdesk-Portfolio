import { Component, OnInit } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private funcs: FuncsService) {
  	//implement better way of showing and hiding padding
  	//funcs.setDisplayHeaderPadding(false);
  }

  ngOnInit() {
  }

}
