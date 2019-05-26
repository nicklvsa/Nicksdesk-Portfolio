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
  navColorCode: string = "#007bff";

  constructor(private authService: AuthService, private funcs: FuncsService) {
    console.log("Mobile: " + funcs.isMobile());
  }

  cycleNavColor(comp: number) {
    if(comp != null && comp > -1) {
      switch(comp) {
        case 0:
          this.navColorCode = "#007bff";
        break;
        case 1:
          this.navColorCode = "#0408B4";
        break;
        case 2:
          this.navColorCode = "#00038B";
        break;
        case 3:
          this.navColorCode = "#000378";
        break;
        case 4:
          this.navColorCode = "#000368";
        break;
        case 5:
          this.navColorCode = "#000250";
        break;
        case 6:
          this.navColorCode = "#01023D";
        break;
        case 7:
          this.navColorCode = "#000135";
        break;
        default:
        this.navColorCode = "#007bff";
        break;
      }
    }
  }

  get currNavBgStyler(): any {
    return {
      'background-color': (this.navColorCode != null) ? this.navColorCode : "#007bff"
    };
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

}
