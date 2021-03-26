import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  get email() { return this.AuthForm.get('email') };
  get pass() { return this.AuthForm.get('pass') };

  public AuthForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required])
  })
  constructor(
    private firebaseService: FirebaseService
  ) { }
  
  ngOnInit() {
  }

  onLogin(){
    console.log('submit-->', this.AuthForm.value)
    this.firebaseService.login(this.AuthForm.value.email , this.AuthForm.value.pass).then(resp =>{
      console.log('response login -->', resp);
    }).catch(error =>{
      console.error('error login -->', error)
    })
  }

}
