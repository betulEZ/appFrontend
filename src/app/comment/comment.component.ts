import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommentService } from '../comment.service';
import { Router } from '@angular/router';
import { Post } from '../post';
import { Input} from '@angular/core';
import{Comment} from '../comment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  @Input() comment: any;
  @Input() mypost:any;
 
 // @Output() ecomment = new EventEmitter();
  comments: Comment[];

  constructor(){
  }
  ngOnInit() {
    
  }
 
}
