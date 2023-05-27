import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router} from '@angular/router';
import { CommentService } from '../comment.service';
import { Route } from '@angular/router';
import { Comment } from '../comment';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: Post[]=[];
  comment: Comment=new Comment();
  @Input() post:any;
  @Input("post.id") id:any;
  @ViewChild('post.id') postId:any;
  //id: any;
  comments: Comment[]=[];
  
  constructor(private postService:PostService,private router: Router,
              private commentService:CommentService,
              public snackBar: MatSnackBar){
  }
  ngOnInit() {
   this.getPost();
   //this.getComment(1);
   //this.id = this.route.snapshot.params['id'];
   // this.getAllComment(this.id);
  
  }
  public getPost(){
    this.postService.getPosts().subscribe((data :Post[] )=>{
      this.posts = data;
      console.log("****************",data);
      
    });
  }
  getList(){
    this.router.navigate(['']);
   }
 
  getAllComment(id: any){
      this.commentService.get(id).subscribe((data :Comment[])=>{
        this.comments = data;
        console.log("****************",data);
        }
      );
    
  }
  saveComment(id:any){
    console.log("**************",id);
    this.comment.userId=1;
    this.comment.postId=id;
    this.commentService.save(this.comment).subscribe(data =>{
      this.getAllComment(id);
      this.openSnackBar('Save comment succesfully', 'ok');
    }); 
    this.comment.text= "";
    
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });

  }
  deletePost(id:any){
  this.postService.delete(id).subscribe(data =>{
    console.log("delete");
    this.openSnackBar('post delete', 'ok');
    this.getPost();
    });
 
  }    

}
