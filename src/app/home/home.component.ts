import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 userId: any=5;
 currentState: boolean;
 constructor(private userService :  UserService){
  this.currentState=userService.currentState;

}


}