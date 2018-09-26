import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:any = 'use-case';
  public users: any = [];

  constructor( private httpClient: HttpClient){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        this.users = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
