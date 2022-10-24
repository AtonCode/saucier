import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  maxId: number = 0;
  pageTitle: string | undefined;
  user: User = new User("","","");
  _userMicroservice: UsersServiceService | undefined;

  constructor(userMicroservice: UsersServiceService ,private router: Router) {
    this.pageTitle = router.url.replace("/", "");
    this._userMicroservice = userMicroservice;
    this._userMicroservice.maxId();
    this._userMicroservice.maxId().subscribe(response => this.maxId = response);
    this.maxId++;
    console.log(this.maxId);
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
  
    var _user: User  = new User(this.maxId.toString(), f.value.username, f.value.password);
    this.user = _user;
    this._userMicroservice?.addUser(this.user);

    if(this._userMicroservice?.login(this.user) == true){
      console.log("Registro correcto");
      this.router.navigate(['/home']);
    }else{
      window.location.reload();
      console.log("Registro incorrecto");
      
    }

    console.log(f.value);  // { first: '', last: '' }
    console.log(this.user.id);
    console.log(this.user.username);

    
  }

}
