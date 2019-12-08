import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { User } from 'src/app/user'
// import { Repos } from 'src/app/repos'
// import { Observable } from 'rxjs'

@Injectable()

export class UserService {
  private username: string;
  private clientid = ''
  private clientsecret = ''

  constructor(private http: HttpClient) {
    this.username = 'wamakimaN';
  }

  getUser() {
    this.http.get("https//api.github.com/users/" + this.username)
     .pipe(map(res => res));
  }
}
