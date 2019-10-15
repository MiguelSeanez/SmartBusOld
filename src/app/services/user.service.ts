import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>
  selectedUser: User = new User();

  constructor(
    private firebase: AngularFireDatabase
  ) { }

    getUsers(){
      return this.userList = this.firebase.list('user');
    }

    insertUser(user: User){
      this.userList.push({
        name: user.name,
        birthdate: user.birthdate,
        genre: user.genre,
        type: user.type,
        balance: 0.00,
        email: user.email,
        password: user.password
      });
    }

    updateUser(user: User){
      this.userList.update(user.$key, {
        name: user.name,
        birthdate: user.birthdate,
        genre: user.genre,
        type: user.type
        //balance: user.balance  //Este si lo vamos a necesitar para la nueva vista de administrador.
      });
    }

    deleteUser($key: string){
      this.userList.remove($key);
    }

}
