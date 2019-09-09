import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UiserviceService } from '../uiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: FormGroup;

  constructor(private fb: FormBuilder, private httpservice: UiserviceService, private router: Router) {
    this.movie = this.fb.group({
      moviename: new FormControl(''),
      language: new FormControl(''),
      Genre: new FormControl('')
    })
  }


  ngOnInit() {
  }
  save(a) {
    console.log(a.value);
    this.httpservice.saveMovie(a).add(data => {
      console.log("2", data)
    })
  }
  submit() {
    this.router.navigateByUrl("movielist");
  }
  submit1() {
    this.router.navigateByUrl("uilogin");
  }
}
