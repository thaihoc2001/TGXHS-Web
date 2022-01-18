import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isSidebarPinned = false;
  isSidebarToggeled = false;
  constructor() { }
  toggleSidebar(): void {
    this.isSidebarToggeled = !this.isSidebarToggeled;
    this.isSidebarPinned = false;
  }

  toggleSidebarPin(): void {
    this.isSidebarPinned = !this.isSidebarPinned;
    this.isSidebarToggeled = false;
  }

  getSidebarStat(): any {
    return {
      isSidebarPinned: this.isSidebarPinned,
      isSidebarToggeled: this.isSidebarToggeled
    };
  }
}
