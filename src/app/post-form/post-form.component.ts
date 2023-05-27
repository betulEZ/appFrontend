import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar, MatSnackBarRef,MatSnackBarConfig} from '@angular/material/snack-bar';
import { UserService } from '../user.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
   appForm= new FormGroup({
      text: new FormControl(),
      title: new FormControl()
   })
   post: Post=new Post();
  
   message: boolean=false;
   posts: Post[];
   constructor(private postService:PostService, private router: Router,public snackBar: MatSnackBar){
   
    
  }
  
  ngOnInit(){
   
  }
  
  onSubmit(){
    this.savePost();
   // this.userService.currentState=true;
   // window.location.reload();
   // this.ngOnDestroy();
  
   
  }
  
  savePost(){
    this.post.userId=1;
    this.postService.save(this.post).subscribe(data =>{
        this.openSnackBar('Save post succesfully', 'ok');
       this.getHome();
       
    }); 
    
    this.message=true;
    
  }
  closeAlert(){
    this.message=false;
  }
  postList(){
    this.postService.getPosts().subscribe((data :Post[] )=>{
    this.posts = data;
  });
  
}
  
  getHome(){
    this.router.navigateByUrl('posts');
    }
  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 2000,
      });

}
}