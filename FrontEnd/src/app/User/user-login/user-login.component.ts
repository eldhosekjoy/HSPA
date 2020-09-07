import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authservice : AuthService,
             private alertify : AlertifyService,
             private router : Router ) {}

  ngOnInit() {
  }

  onLogin(loginForm : NgForm)
  {
    console.log(loginForm.value);

    const  token = this.authservice.authUser(loginForm.value);
    if (token)
    {
      localStorage.setItem('token',token.userName);
      this.alertify.success('login successfull')
      this.router.navigate(['/']);
    }
    else
    {
      this.alertify.error('login failure')
    }



  }

}
