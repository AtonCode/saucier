import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle: string | undefined;
  user: User = new User("","","");
  _userMicroservice: UsersServiceService | undefined;

  constructor(userMicroservice:UsersServiceService ,private router: Router) {
    this.pageTitle = router.url.replace("/", "");
    this._userMicroservice = userMicroservice;

  }

  ngOnInit(): void {
  }

  buttonClick_register(){
    //Redirigir a componete edit
    this.router.navigate(['register']);
    
  }

  onSubmit(f: NgForm) {
    var _user: User  = new User("", f.value.username, f.value.password);
    console.log(_user.username);
    console.log(_user.password);

    if(this._userMicroservice?.login(_user) == true){

      this.router.navigate(['home']);
      console.log(localStorage.getItem("token"));
      console.log("Login correcto", this._userMicroservice.login(_user));
      

    }else{
      console.log("Login incorrecto");
      //recargar pagina
      this.router.navigate(['register']);
      
    }

    
  }

}
