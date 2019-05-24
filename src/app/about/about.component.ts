import { Component, OnInit, Input } from '@angular/core';

import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

	@Input() logo_dir: string = "assets/aboutme.png";

	meme() {
		//do something funny
		console.log("meme works");
	}

	constructor(private funcs: FuncsService) {
		//implement better way of showing and hiding padding
		funcs.setDisplayHeaderPadding(true);
  		funcs.setDisplayFooter(true);
	}

	ngOnInit() {}

}
