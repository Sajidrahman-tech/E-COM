import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


signUp(user:User){
console.log("inside the sigUp service")
this.http.post<{message:string}>('http://localhost:3000/signUp',user).subscribe((response)=>{
console.log(response);
})
}

logIn(Username:string,Password:string):Observable<any>{
  console.log("inside logIn")
  console.log(Username)
  console.log(Password)
 const logIn:any={
  user_ID:'',
  Username:Username,
  Password:Password
  }
  // this.http.post<{response:any}>('http://localhost:3000/logIn',logIn).subscribe((responsee:any)=>{
  // this.logIn=responsee 
  // logIn.user_ID=responsee[0].user_ID
  // // console.log(logIn.user_ID)
  // sessionStorage.setItem('response',JSON.stringify(logIn))
 
  // console.log("1st")
  // // console.log(logIn)
  // })
//   console.log("2nd")
//   // console.log(logIn)
//  // console.log(logIn.user_ID)
//  return  of (logIn)
  
 return this.http.post<{response:any}>('http://localhost:3000/logIn',logIn)
 
 
  }
  

}

