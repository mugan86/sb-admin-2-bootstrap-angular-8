import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  findClassToggled = 'sidenav-toggled';
  toggledSideNav: boolean;
  constructor() {
    if (localStorage.getItem('toggleSideNav') === '1') {
      document
        .getElementById('page-top')
        .classList.add(this.findClassToggled);
      
    } else {
      document
        .getElementById('page-top')
        .classList.remove(this.findClassToggled);
    }
  }

  // sidenav-toggled

  hello() {
    console.log('hello');
  }

  toggled() {
    const find = document.getElementsByClassName(this.findClassToggled)[0];
    console.log(find);
    if (find !== undefined) {
      // remove
      find.classList.remove(this.findClassToggled);
      document.getElementById('accordionSidebar').classList.remove('toggled');
      localStorage.setItem('toggleSideNav', '0');
    } else {
      const takePageTopId = document.getElementById('page-top');
      // add
      takePageTopId.classList.add(this.findClassToggled);
      document.getElementById('accordionSidebar').classList.add('toggled');
      localStorage.setItem('toggleSideNav', '1');
    }
  }

}
