import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {AuthState} from "../../../states/auth/auth.state";
import {TreeviewConfig, TreeviewItem} from "ngx-treeview";

interface FoodNode {
  name: string;
  icon?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Product',
    icon: 'shop',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}]
  },
  {
    name: 'Messenger',
    icon: 'message'
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  constructor(private authState: AuthState) {
  }

  ngOnInit(): void {
    this.dropdown();
  }
  logout(): void{
    this.authState.logout();
  }

  dropdown(): void{
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        // @ts-ignore
        this.parentElement.querySelector(".nested").classList.toggle("active");
        // @ts-ignore
        this.classList.toggle("caret-down");
      });
    }
  }
}
