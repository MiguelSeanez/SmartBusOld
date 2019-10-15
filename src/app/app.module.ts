import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

// Components
import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Services
import { UserService } from './services/user.service';
import { TicketComponent } from './components/users/ticket/ticket.component';
import { RoutesComponent } from './components/routes/routes.component';
import { NewRouteComponent } from './components/routes/new-route/new-route.component';
import { BusStopComponent } from './components/routes/bus-stop/bus-stop.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexPageComponent } from './components/index-page/index-page.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewUserComponent,
    UserListComponent,
    TicketComponent,
    RoutesComponent,
    NewRouteComponent,
    BusStopComponent,
    NotFoundComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
