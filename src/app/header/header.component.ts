import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  logout() {
  	this.authService.logout();
  }

}
