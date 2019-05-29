import { Component, OnInit, Input } from '@angular/core';
import { FuncsService } from '../_helpers/funcs.service';

declare var particlesJS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

	@Input() logo_dir: string = "assets/aboutme.png";

	constructor(private funcs: FuncsService) {
		//implement better way of showing and hiding padding
		funcs.setDisplayHeaderPadding(false);
  		funcs.setDisplayFooter(true);  		
	}

	meme() {
		this.funcs.listen();
	}

	ngOnInit() {
		particlesJS.load('particles-js', 'assets/about_particles.json', () => {
  			console.log("particles loaded!");
		});
	}

}
