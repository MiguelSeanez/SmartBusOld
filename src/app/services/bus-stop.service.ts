import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { BusStop } from '../models/bus-stop';
import { Route } from '../models/route';
import { FirebaseOperation } from '@angular/fire/database/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BusStopService {

  stopList: AngularFireList<any>
  selectedStop: BusStop = new BusStop();


  constructor(
    private firebase: AngularFireDatabase
  ) { }

  getStops(){
    return this.stopList = this.firebase.list('busstop');
  }

  insertStop(stop: BusStop){
    this.stopList.push({
      route: stop.route,
      name: stop.name,
      latitude: stop.latitude,
      longitude: stop.longitude
    });
  }



}
