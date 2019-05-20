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

	constructor(private authService: AuthService, private router: Router, public funcs: FuncsService) {
		if(!authService.isLoggedIn) {
			funcs.delay(2500).then(any => {
				router.navigate(['/login']);
			});
		}
	}

	ngOnInit() {}

}
