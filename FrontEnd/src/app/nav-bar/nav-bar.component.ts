import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  loggedInUser : string;

  constructor(private alertify : AlertifyService) { }

  ngOnInit() {
  }

  loggedin()
  {
    this.loggedInUser= localStorage.getItem('token');
    return this.loggedInUser;

  }

  onLogout()
  {
    localStorage.removeItem('token');
    this.alertify.success('You are successfully logged out');
  }

}
