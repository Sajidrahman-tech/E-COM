import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  //  obj={
  //   user_ID:'',
  //   Username:'',
  //   Password:''
  // }
//@Input() mail:string="";
  constructor(public userService:UserService ,public router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    // console.log(form.value.Username)
    // console.log(form.value.Password)
  this.userService.logIn(form.value.Username,form.value.Password).subscribe((data:any)=>{
   // localStorage.setItem('data',JSON.stringify(data))
    //let item= JSON.parse(localStorage.getItem('data')||'')
   // localStorage.setItem('user_Id',data[0].user_ID)
   
    // console.log("returned value of obj in session is its userid is")
    //let user=localStorage.getItem('user_Id')
    console.log(data.length)
    if(data.length!=0)
    {
       localStorage.setItem('user_Id',data[0].user_ID)
       localStorage.setItem('mail',form.value.Username)
      this.router.navigate([''])
      console.log("go to home page")
      
    }
    else{
    console.log("user not found")
    window.alert("wrong credentials")  
  }
  })
  
//  console.log(typeof(item))
  // console.log(this.obj)
  }
}
