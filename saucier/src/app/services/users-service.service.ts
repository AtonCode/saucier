import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  users: User[] = [];
  userLogin: User = new User("", "", "");
  cantidadUsers: number = 0;

  constructor(private _httpClient: HttpClient) {
    this.getAll().subscribe(response => this.users = response);
    this.cantidadUsers = this.users.length;
  }

  getAll() {
    return this._httpClient.get<User[]>('http://localhost:8080/pantera');
  }
  getUser(id: String) {
    return this._httpClient.get<User>('http://localhost:8080/pantera/' + id);
  }
  addUser(user: User) {
    this._httpClient.post('http://localhost:8080/pantera/register', user).subscribe();
  }
  deleteMateria(user: User) {
    return this._httpClient.delete('http://localhost:8080/pantera/delete/' + user.id);
  }
  maxId() {
    return this._httpClient.get<number>('http://localhost:8080/pantera/maxId');
  }


  login(user: User) {
    var pass: boolean = false;
    this.userLogin = user;
    localStorage.setItem('token', "ok");
    this.users.find(p => user.username == p.username) ? pass = true : pass = false;

    return pass;
  }

}
