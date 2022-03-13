import { Component, OnInit,Input,ViewChild ,AfterViewInit} from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 status:boolean=false
 //@ViewChild(LogInComponent) child:any;
 public mail:any = localStorage.getItem('mail') || '';
  constructor() { }

  ngOnInit(): void {
    console.log('restarting nginit')
    console.log(localStorage.getItem('user_Id'))
    console.log(localStorage.getItem('mail'))
  if(localStorage.getItem('user_Id'||'{}')){
    this.status=true
 // this.mail=localStorage.getItem('mail'||'{}')
  console.log("the mail id loggedn in is")
  console.log(this.mail)

  

  }

  }
  // ngAfterViewInit(){
  //   this.mail = this.child.mail;
  //   console.log(this.mail)
  // }
   

}
