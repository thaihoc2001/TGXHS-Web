import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router} from "@angular/router";
import {IohBreadcrumb} from "../../model/breadcrumb/ioh-breadcrumb";
import {distinctUntilChanged, filter, map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: IohBreadcrumb[] = []
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    // console.log('this.router', this.router);
    // this.router.events.pipe(
    //   filter((event: any) => event instanceof NavigationEnd),
    //   filter((event: ActivationEnd) => event.snapshot.firstChild === null),
    //   map((event: ActivationEnd) => event.snapshot.data)
    // ).subscribe((res) => {
    //   console.log(res);
    //   this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    //   console.log('this.breadcrumbs', this.breadcrumbs);
    // },
    //   error => {
    //   console.log(error);
    //   })
    console.log(this.activatedRoute.snapshot.root)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(data =>
      console.log('data', data)
    )
  }
  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IohBreadcrumb[] = []): IohBreadcrumb[] {
    //If no routeConfig is avalailable we are on the root path
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    // If the route is dynamic route such as ':id', remove it
    const lastRoutePart = path && path.split('/').pop();
    const isDynamicRoute = lastRoutePart && lastRoutePart.startsWith(':');
    if(isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart && lastRoutePart.split(':')[1];
      path = path && lastRoutePart && paramName &&  path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = paramName && route.snapshot.params[paramName];
    }

    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IohBreadcrumb = {
      label: label,
      url: nextUrl,
    };
    // Only adding route with non-empty label
    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
      //If we are not on our current path yet,
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
