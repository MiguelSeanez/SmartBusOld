import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
    this.resetForm();
  }

  onSubmit(userForm: NgForm){
    if(userForm.value.$key == null)
      this.userService.insertUser(userForm.value);
    else
      this.userService.updateUser(userForm.value);
    this.resetForm(userForm);
  }

  resetForm(userForm?: NgForm){
    if(userForm != null)
      userForm.reset();
      this.userService.selectedUser = new User();
  }

}
