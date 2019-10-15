import { Component, OnInit } from '@angular/core';
import { BusStopService } from 'src/app/services/bus-stop.service';
import { BusStop } from 'src/app/models/bus-stop';
import { NgForm } from '@angular/forms';
import { Route } from 'src/app/models/route';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.css']
})
export class BusStopComponent implements OnInit {

  routeList: Route[];

  constructor(
    private stopService: BusStopService,
    private routeService: RouteService
  ) { }

  ngOnInit() {
    this.routeService.getRoutes()
    .snapshotChanges().subscribe(item => {
      this.routeList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.routeList.push(x as Route);        
      });
    })
    this.resetForm();
  }

  onSubmit(stopForm: NgForm){
    this.stopService.insertStop(stopForm.value);
    this.resetForm(stopForm);
  }

  resetForm(stopForm?: NgForm){
    if(stopForm != null)
      stopForm.reset();
      this.stopService.selectedStop = new BusStop();
  }

}
