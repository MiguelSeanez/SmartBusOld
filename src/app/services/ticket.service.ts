import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  ticketList: AngularFireList<any>
  selectedTicket: Ticket = new Ticket();
  
  constructor(
    private firebase: AngularFireDatabase
  ) { }

  getUsers(){
    return this.ticketList = this.firebase.list('ticket');
  }

  insertTicket(user: User){
    this.ticketList.push({
      name: user.name,
      birthdate: user.birthdate,
      genre: user.genre,
      type: user.type,
      balance: user.balance
    });
  }

  updateUser(user: User){
    this.ticketList.update(user.$key, {
      name: user.name,
      birthdate: user.birthdate,
      genre: user.genre,
      type: user.type,
      balance: user.balance
    });
  }

  deleteUser($key: string){
    this.ticketList.remove($key);
  }
}
