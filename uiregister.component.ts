import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UiserviceService } from '../uiservice.service';

@Component({
  selector: 'app-uiregister',
  templateUrl: './uiregister.component.html',
  styleUrls: ['./uiregister.component.css']
})
export class UiregisterComponent implements OnInit {
  login: FormGroup;


  constructor(private fb:FormBuilder,private httpservice:UiserviceService) {
    this.login = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
      conformpassword: new FormControl('')

    })
  }

  ngOnInit() {
  }
  submit(a)
  {
    console.log(a);
    this.httpservice.registerUser(a).add(data => {
      console.log("2", data)
    })
  }
  }
