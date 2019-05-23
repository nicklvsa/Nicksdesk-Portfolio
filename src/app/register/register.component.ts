import { Component, OnInit } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private funcs: FuncsService) {
  	funcs.setDisplayHeaderPadding(true); 
  	funcs.setDisplayFooter(true);
  }

  ngOnInit() {
  }

}
