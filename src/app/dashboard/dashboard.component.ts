import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_auth/auth.service';
import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	user_str: string = "";
	user_img: string = "";

	constructor(private authService: AuthService, private router: Router, public funcs: FuncsService) {
		funcs.setDisplayFooter(true);
		funcs.setDisplayHeaderPadding(true);
		let raw: any = JSON.parse(localStorage.getItem("user"));
		if(!authService.isLoggedIn) {
			funcs.delay(2500).then(any => {
				router.navigate(['/login']);
			});
		}
		if(raw != null) {
			this.user_str = (raw.email == null || raw.email == "") ? raw.displayName : raw.email;
			this.user_img = (raw.photoURL == null || raw.photoURL == "") ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : raw.photoURL;
		} else {
			this.user_str = "";
			this.user_img = "";
		}
		
	}

	ngOnInit() {}
}
