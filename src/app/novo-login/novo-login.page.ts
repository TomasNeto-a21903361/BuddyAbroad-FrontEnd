import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpHeaders, HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-novo-login',
  templateUrl: './novo-login.page.html',
  styleUrls: ['./novo-login.page.scss'],
})
export class NovoLoginPage implements OnInit {

  constructor(private route : Router, public http : HttpClient) { }

  ngOnInit() {
  }

  public goRegisterPage(): void {
    this.route.navigate(['/register']);
  }


  public test(): void {
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    //const requestOptions = new RequestHeaders({ headers: headers });

    const requestOptions = {
      headers: new HttpHeaders().append('Accept', 'application/json').append('Content-Type', 'application/json')
    };

    let postData = {
      "id": 11,
      "interests": [
        {
            "name": "mountain_climbing"
        }
      ],
      "languages": [
          {
              "name": "portuguese"
          }
      ],
      "f_name": "test",
      "l_name": "test",
      "email": "test@email.com",
      "dob": "22-5-2001",
      "phone": "923415278",
      "image": null,
      "description": "yessir",
      "age": 20,
      "rating": 5,
      "tourcount": 10,
      "guide": null
    };

    this.http.post("http://18.171.19.26/users/?format=json", postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
}
