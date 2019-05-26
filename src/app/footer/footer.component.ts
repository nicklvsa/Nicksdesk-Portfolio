import { Component, OnInit } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private funcs: FuncsService) { }

  get getFooterColor(): any {
  	return this.funcs.currNavBgStyler();
  }

  ngOnInit() {
  }

}
