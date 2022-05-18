import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  // ตัวแปร
  message: string = " Hello NG!"

  // One way binding
  profile = {
    "name": "Jessada",
    "tel": "0830950489",
    "gender": "Male"
  }

  // Two ways data bbinding
  userData = {
    "email": "",
    "password": ""
  }

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  submitLogin() {
    if (this.userData.email == "admin@email.com" && this.userData.password == "123456") {
      // alert("Login success");
      this.router.navigate(['backend']);
    }else{
      alert("Login failed !")
    }
  }

}
