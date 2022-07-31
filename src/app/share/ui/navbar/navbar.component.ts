import { Component, OnInit } from '@angular/core';
import { LISTITEM } from '../menu/menu.constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  value: any;
  listItemMenu = LISTITEM
  isCollapsed: boolean = false;
  collapseContent = '';

  constructor() { }

  ngOnInit(): void {
    this.dropdown();
  }
  dropdown(): void{
    
  }
}
