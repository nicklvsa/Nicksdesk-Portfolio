import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../_auth/auth.service';
import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed: boolean = true;

  constructor(private authService: AuthService, private funcs: FuncsService, private router: Router) {
    console.log("Mobile: " + funcs.isMobile());
  }

  get currNavBgStyler(): any {
    return this.funcs.currNavBgStyler();
  }

  cycleNavColor(cycle: number) {
    this.funcs.cycleNavColor(cycle);
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

}
