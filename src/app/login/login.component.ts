import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ="";
  password: string ="";
  currentId: any;
  currentState:boolean=false;
  constructor(private router: Router, private userService: UserService) {}

  login(){
    let bodyData = {
      email: this.email,
      password: this.password
    };
    this.userService.login(bodyData).subscribe((data : any)=>{
      console.log(data);
      if (data.message == "Email not exits")
      {
    
        alert("Email not exits");
  
      }
      else if(data.message == "Login Success")
  
       {
        console.log("succeed");
        this.userService.currentState=true;
        this.router.navigateByUrl('/home');
        
      }
      else
      {
        alert("Incorrect Email and Password not match");
      }
    }); 
  }
}
