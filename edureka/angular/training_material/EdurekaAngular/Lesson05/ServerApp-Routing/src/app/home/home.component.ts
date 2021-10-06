import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';  //import custom Service class

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  constructor(private router: Router,private authService: AuthService) { } //DI

  onLoadServers(id: number) { //custom event handler , puts server recod in edit mode based on server id passed
      this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  onLogin() { //calls login on the custom service
    this.authService.login();
  }

  onLogout() { //callslogout on the custom service
    this.authService.logout();
  }

}
