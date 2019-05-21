import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_auth/auth.service';
import { FuncsService } from '../_helpers/funcs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed: boolean = true;

  constructor(private authService: AuthService, private funcs: FuncsService) {
    //is_not_mobile not returning correct value
    console.log(funcs.isMobile());
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

}
