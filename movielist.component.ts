import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  list:any;
  constructor(private router:Router,public http:HttpClient) { }

  ngOnInit() {
   
    let headers={'id':JSON.parse(localStorage.getItem('logindata')).success._id}
    this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+headers.id)
    .subscribe(data=>{console.log("1",data)
      this.list=data['success'].movies})
    console.log(this.list)
  }
  add()
  {
    this.router.navigateByUrl("movie");
  }
 
 
}
