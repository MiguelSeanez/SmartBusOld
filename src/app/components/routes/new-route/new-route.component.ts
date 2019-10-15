import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';
import { NgForm } from '@angular/forms';
import { Route } from 'src/app/models/route';
//import { element } from 'protractor';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {

  routeList: Route[];
  
  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.routeService.getRoutes()
    .snapshotChanges().subscribe(item=> {
      this.routeList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.routeList.push(x as Route);
      })
    })
  }

  onSubmit(routeForm: NgForm){
    if(routeForm.value.$key == null)
      this.routeService.insertRoute(routeForm.value);
    else
      this.routeService.updateRoute(routeForm.value);
      this.resetForm();
  }

  resetForm(routeForm?: NgForm){
    if(routeForm != null)
      routeForm.reset();
      this.routeService.selectedRoute = new Route();
  }

  onEdit(route: Route){
    this.routeService.selectedRoute = Object.assign({}, route);
  }

  onDelete($key: string){
    this.routeService.deleteRoute($key);
  }

}
