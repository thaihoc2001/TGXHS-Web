import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../service/nav/navbar.service";

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {
  isCollapsed = true;

  constructor( private navService: NavbarService) { }

  ngOnInit(): void {
  }
  toggleSidebarPin(): void {
    this.navService.toggleSidebarPin();
  }
  toggleSidebar(): void {
    this.navService.toggleSidebar();
  }
}
