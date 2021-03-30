import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';


import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private firebaseS: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {}

  toLogout() {
    this.firebaseS.logout().then(resp => {
      console.log('logout exitoso -->', resp);
      alert('Has cerrado sesión con éxito');
      this.router.navigate(['home']);
    }).catch(error => {
      console.log('error logout -->', error)
    })
  }

}
