import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  login() {
    this.http.get('http://localhost:3000/account1').subscribe((accounts) => {
      console.log(accounts);
    });
  }

  ngOnInit(): void {}
}
