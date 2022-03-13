import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    user:User =new User('','','','','')


  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm){
    console.log(form.value.Firstname) 
    console.log(form.value.Lastname) 
    console.log(form.value.Email) 
    console.log(form.value.password) 
    console.log(form.value.repassword) 
     this.user.Firstname=form.value.Firstname
     this.user.Lastname=form.value.Lastname
     this.user.Email=form.value.Email
     this.user.Password=form.value.password
     this.user.repassword=form.value.repassword
  //   console.log(this.user)
  //console.log("inside submit go to signUp")
 this.userService.signUp(this.user)
 window.alert("Successfully Registered")
   }
  
}
