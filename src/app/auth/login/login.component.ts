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
    this.http.get('/assets/user-accounts.json').subscribe((accounts) => {
      console.log(accounts);
    });
  }

  ngOnInit(): void {}
}
