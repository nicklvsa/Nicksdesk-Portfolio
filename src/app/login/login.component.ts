import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_auth/auth.service';
import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email: string = "";
	password: string = "";

	constructor(private authService: AuthService, private funcs: FuncsService) {
		funcs.setDisplayFooter(true);
	}

	ngOnInit() {}

	loginTwitter() {
		this.authService.loginWithTwitter();
	}

	loginGoogle() {
		this.authService.loginWithGoogle();
	}

	loginComp() {
		this.authService.login(this.email, this.password);
	}

}
