import { Component, OnInit } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private funcs: FuncsService) { 
  	funcs.setDisplayFooter(true);
  }

  ngOnInit() {
  }

}
