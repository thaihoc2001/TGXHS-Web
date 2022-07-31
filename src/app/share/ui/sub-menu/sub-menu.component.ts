import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  listItemSubMenu = [
    {
      name: 'Trang chủ',
      link: 'home'
    },
    {
      name: 'Cửa hàng',
      link: '#'
    },
    {
      name: 'Tin tức',
      link: '#'
    },
    {
      name: 'Trả góp Home Credit',
      link: '#'
    },
    {
      name: 'Trả góp qua thẻ tín dụng',
      link: '#'
    },
    {
      name: 'Liên hệ',
      link: '#'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
