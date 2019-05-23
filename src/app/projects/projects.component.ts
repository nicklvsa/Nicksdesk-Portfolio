import { Component, OnInit } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private funcs: FuncsService) { 
  	funcs.setDisplayHeaderPadding(true);
  	funcs.setDisplayFooter(true);
  }

  ngOnInit() {
  }

}
