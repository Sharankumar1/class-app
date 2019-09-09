import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UiserviceService } from '../uiservice.service';

@Component({
  selector: 'app-uilogin',
  templateUrl: './uilogin.component.html',
  styleUrls: ['./uilogin.component.css']
})
export class UiloginComponent implements OnInit {
login:FormGroup;
  constructor(private httpservice:UiserviceService,private fb:FormBuilder) {
    this.login =  this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
   })
  }

  ngOnInit() {
  }
  save(a){
    console.log(a);
    this.httpservice.loginUser(a).add(data => {
      console.log("2", data)
  })

}
}
