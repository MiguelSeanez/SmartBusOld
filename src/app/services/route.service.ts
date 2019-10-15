import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Route } from '../models/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  routeList: AngularFireList<any>
  selectedRoute: Route = new Route();

  constructor(
    private firebase: AngularFireDatabase
  ) { }

  getRoutes(){
    return this.routeList = this.firebase.list('routes');
  }

  insertRoute(route: Route){
    this.routeList.push({
      route: route.route
    });
  }

  updateRoute(route: Route){
    this.routeList.update(route.$key, {
      route: route.route
    });
  }

  deleteRoute($key: string){
    this.routeList.remove($key)
  }
}
