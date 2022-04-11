import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{11}$';  
  isValidFormSubmitted = false;
  user = new User();

  onFormSubmit(userForm: NgForm) {
    this.isValidFormSubmitted = false;
    if (userForm.invalid) { return }
    this.isValidFormSubmitted = true;
    userForm.resetForm();
  }
}
