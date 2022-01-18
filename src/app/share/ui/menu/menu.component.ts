import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addClass();
  }
  addClass(): void{
    // tslint:disable-next-line:only-arrow-functions typedef
    window.addEventListener('scroll', function(){
      const menu = document.querySelector('menu');
      // @ts-ignore
      menu.classList.toggle('sticky', window.scrollY > 85);
    });
  }
}
