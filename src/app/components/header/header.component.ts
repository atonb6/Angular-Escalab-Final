import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private firebaseS: FirebaseService
  ) { }

  ngOnInit() {
  }

  toLogout() {
    this.firebaseS.logout().then(resp => {
      console.log('logout exitoso -->', resp);
    }).catch(error => {
      console.log('error logout -->', error)
    })
  }

}
