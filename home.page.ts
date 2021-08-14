import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any = {};

  constructor(
    private authObj: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {

    if (this.user.email && this.user.password) {
      
      this.authObj.signInWithEmailAndPassword(this.user.email, this.user.password).then((res) => {
        console.log(res);

        this.router.navigateByUrl('/profile');


      }).catch(e => {
        console.log(e);
      })
      
    }
  }

}