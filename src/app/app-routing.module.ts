import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { NewRouteComponent } from './components/routes/new-route/new-route.component';
import { BusStop } from './models/bus-stop';
import { BusStopComponent } from './components/routes/bus-stop/bus-stop.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexPageComponent } from './components/index-page/index-page.component';


const routes: Routes = [
  { path: '', component: IndexPageComponent},
  { path: 'signup', component: NewUserComponent},
  { path: 'users', component: UserListComponent},
  { path: 'newroute', component: NewRouteComponent},
  { path: 'newbusstop', component: BusStopComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
