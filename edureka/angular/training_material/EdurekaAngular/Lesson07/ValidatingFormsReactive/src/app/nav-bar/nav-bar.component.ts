import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  collapsed = true;

  toggleCollapsed(): void { //to collapse/ roll up the menu
    this.collapsed = !this.collapsed;
  }

}
