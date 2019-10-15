import { Component, OnInit } from '@angular/core';

//Servicio
import { UserService } from '../../../services/user.service';

// Class User
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserService
    ) { }

  ngOnInit() {
    this.userService.getUsers()
    .snapshotChanges().subscribe(item=> {
      this.userList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.userList.push(x as User);
      })
    })
  }

  onEdit(user: User){
    this.userService.selectedUser = Object.assign({}, user);
  }

  onDelete($key: string){
      this.userService.deleteUser($key);
  }

}
