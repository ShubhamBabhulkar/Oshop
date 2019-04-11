import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {

  constructor(public auth: AuthService) {
    console.log('auth in nav tab component', auth);
  }

  logout = () => {
    this.auth.logout();
  }
}
