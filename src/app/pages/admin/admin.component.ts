import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../share/service/nav/navbar.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private navService: NavbarService) { }

  ngOnInit(): void {
  }
  getClasses(): any {
    return {
      'pinned-sidebar': this.navService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.navService.getSidebarStat().isSidebarToggeled
    };
  }
}
