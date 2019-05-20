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

  constructor(private authService: AuthService, private funcs: FuncsService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
  
}
