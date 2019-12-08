import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/user'
import { Repos } from 'src/app/repos'
import { Observable } from 'rxjs'

@Injectable()

export class UserService {
  private username: string;
  private url = 'https://api.github.com/users/'
  private clientid = ''
  

  constructor(private http: HttpClient) {
    this.username = 'wamakimaN';
    this.clientid = '728eb7d221de469a432b435a9883a695087618fa'
  }

    getUser(): Observable<User[]> {
      return this.http.get<User[]>(this.url + this.username).pipe(map( res => res));
    }
    getRepos(): Observable<Repos[]> {
      return this.http.get<Repos[]>(this.url + this.username + '/repos').pipe(map( res => res));
    }
  }

