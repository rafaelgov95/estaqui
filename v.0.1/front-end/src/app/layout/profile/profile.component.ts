import { Component, OnInit } from '@angular/core';
// import { AuthService } from './../auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
s
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

    constructor() {
        this.profile = JSON.parse(localStorage.getItem("currentUser"));
    }

  ngOnInit() {
    // if (this.auth.userProfile) {
    //   this.profile = this.auth.userProfile;
    // } else {
    //   this.auth.getProfile((err, profile) => {
    //     this.profile = profile;
    //   });
    // }
  }

}
