import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UiserviceService {
  movieList(a: any) {
    throw new Error("Method not implemented.");
  }
  baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'Authorization': 'my-auth-taken'
    })
  };

  constructor(private http: HttpClient) { }
  registerUser(values) {
    let body = {
      name: values.username,
      password: values.password,
      confirmpassword: values.conformpassword
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users', body, this.httpOptions).pipe(map(data => { console.log("1", data) }))
      .subscribe(result => { })
  }
  loginUser(values) {
    let home = {
      name: values.username,
      pass: values.password
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate', home, this.httpOptions)
      .pipe(map(data => {
        localStorage.setItem("logindata", JSON.stringify(data)) 
        console.log("3", data)
      })).subscribe(result => { })
  }
  saveMovie(values) {
    let movieList = {
      id: JSON.parse(localStorage.getItem("logindata")).success._id,
      MovieName: values.moviename,
      Language: values.language,
      Genre: values.Genre
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies', movieList,this.httpOptions)
    .pipe(map(data =>{ console.log("3", data) })).subscribe(result=>{})
  }
}