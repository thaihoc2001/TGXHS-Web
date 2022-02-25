import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {AuthState} from "../../../states/auth/auth.state";

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
    // this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }
  // private _transformer = (node: FoodNode, level: number) => {
  //   return {
  //     expandable: !!node.children && node.children.length > 0,
  //     name: node.name,
  //     level: level,
  //   };
  // };
  //
  // treeControl = new FlatTreeControl<ExampleFlatNode>(
  //   node => node.level,
  //   node => node.expandable,
  // );
  //
  // treeFlattener = new MatTreeFlattener(
  //   this._transformer,
  //   node => node.level,
  //   node => node.expandable,
  //   node => node.children,
  // );
  //
  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  //
  // hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  logout(): void{
    this.authState.logout();
  }
}
