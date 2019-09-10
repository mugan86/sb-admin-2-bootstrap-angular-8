import { Component, OnChanges } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnChanges {
  findClassToggled = 'sidenav-toggled';
  toggledSideNav: boolean;
  toggled() {
    const find = document.getElementsByClassName(this.findClassToggled)[0];
    if (find !== undefined) {
      // remove
      this.toggledAction(true, find);
    } else {
      const takePageTopId = document.getElementById('page-top');
      // add
      this.toggledAction(false, takePageTopId);
    }
  }

  private toggledAction(open: boolean, elementPrincipal: any) {
    if (open) {
      elementPrincipal.classList.remove(this.findClassToggled);
      document.getElementById('accordionSidebar').classList.remove('toggled');
      localStorage.setItem('toggleSideNav', '0');
    } else {
      elementPrincipal.classList.add(this.findClassToggled);
      document.getElementById('accordionSidebar').classList.add('toggled');
      localStorage.setItem('toggleSideNav', '1');
    }
  }

  ngOnChanges(change: any) {
    console.log(change);
  }

}
