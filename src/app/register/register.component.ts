import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string ="";
  email: string ="";
  password: string ="";
  id:any;
  user: User=new User();
  constructor(private http: HttpClient ,private userService:UserService,private router: Router)
  {
 
  }
  save(){
    this.userService.save(this.user).subscribe(data =>{
    }); 
    
    alert("Employee Registered Successfully");
    this.userService.currentState=true;
   
    this.router.navigateByUrl('/home');

  }

}
